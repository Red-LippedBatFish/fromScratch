//  https://stackoverflow.com/questions/58683641/how-to-define-foreign-key-constraint-in-postgres-using-sequelize-orm
module.exports = (sequelize, DataTypes) => {

  let client = sequelize.define ('client', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id' },
     ...
      }, {
  
      associate: models => {
          client.hasMany (models.enviornment, {
              foreignKey: { name: 'client_id', allowNull: false }
          });
      },
  
  });
  return client;
};
  
module.exports = (sequelize, DataTypes) => {

  let enviornment = sequelize.define ('enviornment', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'id' },
     ...
      }, {
  
      associate: models => {
          enviornment.belongsTo (models.client, {
              foreignKey: { name: 'client_id', allowNull: false }
          });
      },
  
  });
   return enviornment;
};

Projects.hasMany(Tasks, {
  foreignKey: {
    name: 'projectID',
    allowNull: false
  } 
})
Tasks.belongsTo(Projects, {
  foreignKey: {
  name: 'TaskID',
  allowNull: false
} 
})


Tasks.hasMany(MiniTasks)

MiniTasks.belongsTo(Tasks)




//// This is the setup of our models for the examples below
const Ship = sequelize.define('ship', {
  name: DataTypes.TEXT,
  crewCapacity: DataTypes.INTEGER,
  amountOfSails: DataTypes.INTEGER
}, { timestamps: false });
const Captain = sequelize.define('captain', {
  name: DataTypes.TEXT,
  skillLevel: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 10 }
  }
}, { timestamps: false });
Captain.hasOne(Ship);
Ship.belongsTo(Captain);



//ensures all the data is available to us
const awesomeCaptain = await Captain.findOne({
  where: {
    name: "Jack Sparrow"
  },
  include: Ship
});

// Example: creating an associated model using the standard methods
Bar.create({
  name: 'My Bar',
  fooId: 5
});
// This creates a Bar belonging to the Foo of ID 5 (since fooId is
// a regular column, after all). Nothing very clever going on here.