const { Sequelize } = require( 'sequelize' );

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'joserobert1',
    database: 'Entregable1',
    logging: false
});

module.exports = { db };