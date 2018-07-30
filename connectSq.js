const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connect successfully.');
    })
    .catch(err => {
        console.error('Connect error', err);
    });



module.exports = sequelize;