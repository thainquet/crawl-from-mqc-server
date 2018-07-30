var express = require('express');
var router = express.Router();
var test = require("./model/link_page")


router.get('/', function (req, res) {
    let ids = [];
    test.findAll({}).then( (data) => {
        data.forEach(i => {
            ids.push(i.dataValues)
        })
        res.send(ids)
    })
})

router.get('/ad/:id', function (req, res) {
    let qc_id = req.params.id;
    test.findOne({
        where: {
            id: qc_id
        }
    }).then((data) => {
        res.send(data.dataValues)
    })
})

router.post('/ads/new', function (req, res) {
    test.create({
        linkFB: 'somelink',
        title: 'sometitle',
        content: 'somecontent',
        linhvuc: 'somelinhvuc',
        mucdich: 'somemucdich',
        loaihinhqc: 'someloaihinhqc'
    }).then( () => {
        res.send({
            message : "inserted"
        })
    })
})


module.exports = router;