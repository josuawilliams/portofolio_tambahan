'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsToMany(models.User, {
        through: models.Favourite
      })
    }
  }
  Hero.init({
    heroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: '-',
    },
    power: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
    {
      sequelize,
      modelName: 'Favourite',
    }
  );
  return Hero;
};