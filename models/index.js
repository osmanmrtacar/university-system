const Sequelize = require('sequelize');
const itemModel = require("./item");
const manufacturerModel = require("./manufacturers");
const userModel = require("./user");
const personModel = require("./person");

const sequelize = new Sequelize('database', 'username', 'password', {
  // sqlite! now!
  dialect: 'sqlite',

  // the storage engine for sqlite
  // - default ':memory:'
  storage: '../database.sqlite'
});

const item =  itemModel(sequelize, Sequelize);
const manufacturer = manufacturerModel(sequelize, Sequelize);
const user = userModel(sequelize, Sequelize);
const person = personModel(sequelize, Sequelize);

item.belongsTo(manufacturer, {targetKey:'id',foreignKey: 'manufacturerId'});
item.hasMany(person, {targetKey:'id', foreignKey:'ownerId'});
//person.hasMany(item, {targetKey:'ownerId', foreignKey:'id'});

 sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  }).catch(err=>{
    console.log(err);
  });  
  


//item.hasOne(manufacturer)
//manufacturer.hasMany(item);

module.exports = {
  item,
  manufacturer,
  user,
  person
}
