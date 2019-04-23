module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        status: {
           type: type.BOOLEAN, allowNull: false, defaultValue: true
            
        },
        name: type.STRING
    })
}