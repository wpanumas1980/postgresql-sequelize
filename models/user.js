'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(),id: undefined}
    }
  };
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'users',
    modelName: 'User',
  });
  return User;
};