let config = require('config');
let connectionId = config.get('connectionId');

module.exports = {
search: function (APPID,status) {
        let queryText = "SELECT count(*) from application_tracking where APPLICATION_ID = '" + APPID + "' AND STATUS_CODE ='" + status + "'";
        console.log(queryText);
        let data = {
            "connectionId": connectionId,
            "cacheKey": "112w21e",
            "queryText":queryText
        };
        
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const fetch = require('node-fetch');

        return fetch('https://10.9.77.61:14444/api/query-result', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => response.queryResult.rows[0]['COUNT(*)'])
            .catch(error => console.error('Error:', error));
}
        
}
