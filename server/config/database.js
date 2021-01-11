const { Sequelize } = require('sequelize')

const db = new Sequelize(
  'mappingroom',
  'root',
  'mgutierrezh',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  }
)

exports.db = db
