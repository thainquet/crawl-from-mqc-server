const express = require('express')
const router = require('./Routes')
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(router);

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})


