const axios = require('axios');
require('dotenv').config();

exports.handler = (events, context, callback) => {
    const URL = 'https://www.googleapis.com/youtube/v3/channels';
    const part = 'statistics';
    const forUsername = events.queryStringParameters.username ? events.queryStringParameters.username : '';
    const key = process.env.YOUTUBE_API_KEY;

    const send = (status, body) => {
        callback( null, { 
            statusCode: status,
            body: JSON.stringify(body)
        })
    }

    axios.get(URL, {
        headers: { 
            'Content-Type' : 'application/json'
        },
        params: { part, forUsername, key }
    })  
      .then((response) => send(response.status, response.data))
      .catch((error) => send(error.status, error.data));

}