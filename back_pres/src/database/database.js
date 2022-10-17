import Sequelize from 'sequelize';

export const sequelize = new Sequelize('budgetdb', 'postgres', 'passwordPostgreSQL', {
  host: 'localhost',
  dialect: 'postgres'
});