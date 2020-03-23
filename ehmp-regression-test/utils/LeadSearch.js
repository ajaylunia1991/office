var config = require('config');
var connectionId = config.get('connectionId');

module.exports = {
    search: function (randomInfo) {
            let lead = {
                firstName: randomInfo.firstName,
                areaCode: randomInfo.phone.slice(0, 3),
                phoneNumber: randomInfo.phone.slice(4)
            };
            console.log(lead.firstName);
            console.log(lead.phoneNumber);
            console.log(lead.areaCode);
            let url = 'https://10.9.77.61:14444/api/query-result';
            let queryText = "SELECT count(*) FROM LEAD_TRACKING WHERE LEAD_ID IN (SELECT lp.LEAD_ID FROM LEAD_PHONE lp,LEAD_MEMBER lm WHERE lp.LEAD_ID = lm.lead_id"
                + " AND lm.first_name = '" + lead.firstName + "'"
                + " AND lp.area_code = '" + lead.areaCode + "'"
                + " AND lp.phone_number = '" + lead.phoneNumber + "') and status_code='L1'";
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
