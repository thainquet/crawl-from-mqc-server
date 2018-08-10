const con = require("./connectDB");
const Sequelize = require('sequelize');
const sequelize = require("./connectSq");
const test = require("./model/link_page")
let ids = [];



(async () => {
    for (let ID = 1; ID < 1453; ID++) {
        let sql = "SELECT * FROM test WHERE ID = ?";
        const id = await queryId(con, sql, ID);
        ids.push({
            ID: ID,
            title: id[0].title,
            link_Qc: id[0].link_qc,
            link_fb: id[0].link_fb,
            content: id[0].content,
            linhvuc: id[0].linhvuc,
            mucdich: id[0].mucdich,
            loaihinhqc: id[0].loaihinhqc
        });
    }


    test.sync({
        force: true
    }). then( () => {
        ids.forEach(i => {
            test.create({
                linkFB: i.link_fb,
                title: i.title,
                content: i.content,
                linhvuc: i.linhvuc,
                mucdich: i.mucdich,
                loaihinhqc: i.loaihinhqc
            });
        })
    })

})();





function queryId(con, sql, id) {
    return new Promise((resolve, reject) => {
        con.query(sql, id, function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    })
}