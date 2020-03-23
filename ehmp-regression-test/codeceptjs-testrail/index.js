// const requireg = require('requireg');
const event = require('codeceptjs').event;
const Testrail = require('testrail-api');
// console.log("event: " + JSON.stringify(event));
console.log("Enter index.js... ");
const defaultConfig = {
	host: '',
	user: '',
	password: '',
};

const testCase = {
	passed: { status_id: 1, comment: 'This test passed' },
	failed: { status_id: 5, comment: 'This test failed' },
};
const tcRegex = /(\@[C])\w+/g;

function getToday() {
	const today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth() + 1; // January is 0!

	const yyyy = today.getFullYear();
	if (dd < 10) {
		dd = `0${dd}`;
	}
	if (mm < 10) {
		mm = `0${mm}`;
	}
	return `${dd}/${mm}/${yyyy}`;
}

module.exports = (config) => {
	config = Object.assign(defaultConfig, config);
	// console.log("enter codeceptjs index.js-config....")
	console.log("config:  "+JSON.stringify(config))

	if (config.host === '' || config.user === '' || config.password === '') throw new Error('Please provide proper Testrail host or credentials');
	if (!config.projectId) throw new Error('Please provide project id');

	const testrail = new Testrail(config);

	let suiteId;
	let runName;
	let runId = config.runId;
	let caseId;
	var case_ids;

	runName = config.runName ? config.runName : `This is a new test run on ${getToday()}`;

	function _addTestRun(projectId, suiteId, runName) {
		testrail.addRun(projectId, { suite_id: suiteId, name: runName, include_all: false }, (err, response, run) => {
			if (err) throw new Error(`Something is wrong while adding new run with name ${runName}. Please check ${JSON.stringify(err)}`);
			runId = run.id;
			console.log("runId: " + runId + ';  ' )
		});
	}

	function _updateTestRun(runId, caseId) {
        console.log("_updateTestRun - caseId: " + caseId)
		testrail.updateRun(runId, { case_ids: [caseId] }, (err, response, run) => {
			if (err) throw new Error(`Something is wrong while updating run with name ${runName}. Please check ${JSON.stringify(err)}`);
		});
	}

	if (config.suiteId === undefined || config.suiteId === null ) {
		testrail.getSuites(config.projectId, function (err, response, suites) {
			if (err) throw new Error(`Something is wrong while getting suites of project ID: ${config.projectId}. Please check ${JSON.stringify(err)}`);
			suiteId = suites[0].id;
			_addTestRun(config.projectId, suiteId, runName);
		});
	} else if( config.runId === undefined || config.runId === null ) {
		suiteId = config.suiteId;
		_addTestRun(config.projectId, suiteId, runName);
	}
	event.dispatcher.on(event.test.started, (test) => {
		caseId = (test.title).split('@C')[1];//only pick the first tag in description
		console.log("event.test.started - caseId: " + caseId + ';  ' )
		case_ids.push(caseId);
		_updateTestRun(config.runId , case_ids);
	});


	event.dispatcher.on(event.test.passed, (test) => {
		console.log("event.test.passed - caseId: " + caseId)
		testrail.addResultForCase(runId, caseId, testCase.passed, (err) => {
			if (err) throw new Error(`Something is wrong while adding result for a test case ${test.title}. Please check ${JSON.stringify(err)}`);
		});
	});

	event.dispatcher.on(event.test.failed, () => {
		console.log("event.test.failed - caseId: " + caseId)
		testrail.addResultForCase(runId, caseId, testCase.failed, (err) => {
			if (err) throw new Error(`Something is wrong while adding result for a test case ${test.title}. Please check ${JSON.stringify(err)}`);
		});
	});

	return this;
};
