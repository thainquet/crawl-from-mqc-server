const express = require('express');
const app = express();
const test = require('./model/link_page')
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/new', ( (req,res) => {
    const { linkFB, title, content, linhvuc, mucdich, loaihinhqc } = req.body;
    try {
        if (!linkFB || !title || !content || !linhvuc || !mucdich || !loaihinhqc) {
            res.end({
                message: "all fields are required!"
            })
        } else {
            test.create({
                linkFB: linkFB,
                title: title,
                content: content,
                linhvuc: linhvuc,
                mucdich: mucdich,
                loaihinhqc: loaihinhqc
            }).then(() => {
                res.send({
                    message: "inserted"
                })
            })
        }
    }
    catch (error) {
        res.json({
            success: false,
            reason: error.message
        })
    }
}));

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})

