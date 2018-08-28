const express = require('express');
const app = express();
const test = require('./model/link_page')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const op = Sequelize.Op;


app.use(bodyParser.json());


app.post('/LinhVuc', ((req, res) => {
    const {linhvuc}  = req.body
    test.findAll({
        where: {
            linhvuc : {
                [op.like]: '%' + linhvuc + '%'
            }
        }
    }).then((data) => {
        let ids = [];
        data.forEach(i => {
            ids.push(i.dataValues)
        })
        res.json({
            success: true,
            data: ids
        })
    });
}))


app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})	