const test = require("./model/link_page")


var controller = {
    getAll: function (req, res) {
        try {
            let ids = [];
            test.findAll({}).then((data) => {
                data.forEach(i => {
                    ids.push(i.dataValues)
                })
                res.json({
                    success: true,
                    data: ids
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
    getById: function (req, res) {
        let qc_id = req.params.id;
        test.findOne({
            where: {
                id: qc_id
            }
        }).then((data) => {
            if (data == null) {
                throw new Error("Wrong id!");
            }
            else {
                res.json({
                    success: true,
                    data: data.dataValues
                })
            }
        }).catch((err) => {
            res.json({
                success: false,
                error: err.message
            })
        })

    },
    postNew: function (req, res) {
        const { linkFB, title, content, linhvuc, mucdich, loaihinhqc } = req.body;
        try {
            if (!linkFB || !title || !content || !linhvuc || !mucdich || !loaihinhqc) throw new Error("all fields are required!")
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
        catch (error) {
            res.json({
                success: false,
                reason: error.message
            })
        }
    },
    updateOne: function (req, res) {
        let req_id = req.params.id;
        const { linkFB, title, content, linhvuc, mucdich, loaihinhqc } = req.body;
        test.findOne({
            where: {
                id: req_id
            }
        }).then((data) => {
            if (data == null) {
                throw new Error("Wrong id!");
            }
            else {
                try {
                    if (!linkFB && !title && !content && !linhvuc && !mucdich && !loaihinhqc) 
                    throw new Error("at least 1 row to update!");
                    test.update({
                        linkFB: linkFB,
                        title: title,
                        content: content,
                        linhvuc: linhvuc,
                        mucdich: mucdich,
                        loaihinhqc: loaihinhqc
                    },
                        {
                            where: {
                                id: req_id
                            }
                        }).then(() => {
                            res.json({
                                success: true,
                                message: "updated!"
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
        }).catch((err) => {
            res.json({
                success: false,
                error: err.message
            })
        })
    },
    deleteById: function (req, res) {
        let req_id = req.params.id;
        test.findOne({
            where: {
                id: req_id
            }
        }).then((data) => {
            if (data == null) {
                throw new Error("Can't delete blank row!");
            }
            else {
                test.destroy({
                    where: {
                        id: req_id,
                    }
                }).then(() => {
                    res.json({
                        success: true,
                        message: "deleted!"
                    })
                })
            }
        }).catch((err) => {
            res.json({
                success: false,
                error: err.message
            })
        })
    }
}

module.exports = controller;