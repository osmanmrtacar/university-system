module.exports = (sequelize, type) => {
    return sequelize.define('item', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        manufacturerId: {
            type: type.INTEGER,
            allowNull: false
        },
        ownerId: {
            type: type.INTEGER
        },
        status: {
           type: type.BOOLEAN, allowNull: false, defaultValue: true
            
        },
        name: type.STRING,
        price: type.FLOAT
        
    })
} 