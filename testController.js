const test = require("./model/link_page")


var controller = {
    getAll: function (req, res) {
        let ids = [];
        test.findAll({}).then((data) => {
            data.forEach(i => {
                ids.push(i.dataValues)
            })
            res.send(ids)
        })
    },
    getById: function (req, res) {
        let qc_id = req.params.id;
        test.findOne({
            where: {
                id: qc_id
            }
        }).then((data) => {
            res.send(data.dataValues)
        })
    },
    postNew: function (req, res) {
        test.create({
            linkFB: 'somelink',
            title: 'sometitle',
            content: 'somecontent',
            linhvuc: 'somelinhvuc',
            mucdich: 'somemucdich',
            loaihinhqc: 'someloaihinhqc'
        }).then(() => {
            res.send({
                message: "inserted"
            })
        })
    },
    deleteById: function (req, res) {
        let id = req.params.id;
        test.destroy({
            where: {
                id: id,
            }
        }).then(() => {
            res.send({
                message: "deleted"
            })
        })
    },
    updateOne: function (req, res) {
        test.update({
            title: "anothertitle"
        }, {
            where: {
                title: "sometitle"
            }
        }).then(() => {
            res.send({
                message: "updated"
            })
        })
    }
}

module.exports = controller;