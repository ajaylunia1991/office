/**
 * @author
 */

let config = require('config');
let connectionId = config.get('connectionId');

module.exports = {
    recosearch: function (randomInfo) {
            let lead = {
                firstName: randomInfo.firstName,
                lastName: randomInfo.lastName,

                areaCode: randomInfo.phone.slice(0, 3),
                phoneNumber: randomInfo.phone.slice(4),
                email: randomInfo.email,
            };
            console.log(lead.firstName);
            console.log(lead.phoneNumber);
            console.log(lead.areaCode);
            let url = 'https://10.9.77.61:14444/api/query-result';
                 let queryText = "SELECT count(*) FROM LEAD_TRACKING WHERE LEAD_ID IN (SELECT l.LEAD_ID FROM LEAD l,LEAD_MEMBER lm WHERE l.LEAD_ID = lm.lead_id"
                     + " AND lm.first_name = '" + lead.firstName + "'"
                     + " AND lm.last_name = '" + lead.lastName + "'"

                     + " AND l.email = '" + lead.email + "') and status_code='L53'";
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

    

};




