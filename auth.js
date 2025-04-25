
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
app.use(express.json())
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user

port = 3000;
// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    //  authenticate APIKey here
    let key = req.headers['auth_key'];
    if(key === VALID_API_KEY){
        console.log('Okay, you are one of us, get in!')
        next()
    }
    else{
        console.log('wrong API, f**k off!!')
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

app.listen(port, () => {
    console.log(`am listening at port ${port}`)
})
module.exports = app;