const express = require('express')
const mysql = require('mysql')
const ads = require("./model/link")
const test = require("./model/link_page")
const router = require("./routes")


const app = express();

app.get('/', router);

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})

