const express = require('express')
const router = require('./Routes')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(router);

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})


