const test = require("./model/link_page")


var controller = {
    getAll: function (req, res) {
        try {
            let ids = [];
            test.findAll({}).then((data) => {
                data.forEach(i => {
                    ids.push(i.dataValues)
                })
                res.send(ids)
            })
        }
        catch (error) {
            res.json({
                success: false,
                reason: error.message
            })
        }
    },
    getById: function (req, res) {
        try {
            let qc_id = req.params.id;
            test.findOne({
                where: {
                    id: qc_id
                }
            }).then((data) => {
                res.send(data.dataValues)
            })
        }
        catch (error) {
            res.json({
                success: false,
                reason: error.message
            })
        }
    },
    postNew: function (req, res) {
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
                    res.json({
                        success: true,
                        message: "inserted!"
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
    },
    deleteById: function (req, res) {
        try {
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
        }
        catch (error) {
            res.json({
                success: false,
                reason: error.message
            })
        }
    },
    updateOne: function (req, res) {
        try {
            test.update({
                title: "anothertitle"
            },
            {
                where: {
                    title: "sometitle"
                }
            }).then(() => {
                res.send({
                    message: "updated"
                })
            })
        }
        catch (error) {
            res.json({
                success: false,
                reason: error.message
            })
        }
    }
}

module.exports = controller;