const sequelize = require('../connect/connectSq')
const Sequelize = require('sequelize')


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
        type: Sequelize.STRING
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