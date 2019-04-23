module.exports = (sequelize, type) => {
    return sequelize.define('manufacturer', {
        id: {
          type: type.INTEGER,
          foreignKey: true,
          primaryKey: true,
          autoIncrement: true
        },
        status: {
           type: type.BOOLEAN, allowNull: false, defaultValue: true
            
        },
        name: type.STRING
    })
}