const axios = require('axios');

exports.handler = (events, context, callback) => {
    const URL = 'https://www.googleapis.com/youtube/v3/channels';
    const part = 'statistics';
    const id = events.queryStringParameters.channelId ? events.queryStringParameters.channelId : '';
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
        params: { part, id, key }
    })  
      .then((response) => send(response.status, response.data))
      .catch((error) => send(error.status, error.data));

}