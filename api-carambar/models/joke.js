'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {}

  Joke.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Joke',
    tableName: 'Jokes'
  });

  return Joke;
};
