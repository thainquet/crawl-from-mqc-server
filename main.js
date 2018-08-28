const express = require('express')
const router = require('./Routes')
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(router);

app.get('/test', (req, res) => res.sendFile(__dirname + '/test/index.html'))
app.get('/test/indexDetail.html', (req, res) => res.sendFile(__dirname + '/test/indexDetail.html'))

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})


