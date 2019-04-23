module.exports = (sequelize, type) =>{
    return sequelize.define('person', {
        id:{
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