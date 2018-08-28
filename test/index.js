const express = require('express')

const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/indexDetail.html', (req, res) => res.sendFile(__dirname + '/indexDetail.html'))

app.listen(7777, () => console.log('App run on port 7777!'))
