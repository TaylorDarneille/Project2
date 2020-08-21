'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wineFlight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.wineFlight.belongsTo(models.user);
      models.wineFlight.belongsToMany(models.wine, {through: 'wineFlightWines'})
    }
  };
  wineFlight.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wineFlight',
  });
  return wineFlight;
};