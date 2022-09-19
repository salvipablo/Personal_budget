import Sequelize from 'sequelize';

export const sequelize = new Sequelize('budgetdb', 'postgres', 'Semapi_*419', {
  host: 'localhost',
  dialect: 'postgres'
});