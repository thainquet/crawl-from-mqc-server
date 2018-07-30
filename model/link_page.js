const Sequelize = require("sequelize");
const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 3000000,
        idle: 10000
    },

});
const test = sequelize.define('all_link', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    title : {
        type: Sequelize.STRING
    },
    linkFB : {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING(1000)
    },
    linhvuc : {
        type: Sequelize.STRING
    },
    mucdich : {
        type: Sequelize.STRING
    },
    loaihinhqc: {
        type: Sequelize.STRING
    }
})

module.exports = test;