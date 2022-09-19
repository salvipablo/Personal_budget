import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const BudgetSchema = sequelize.define('budget', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  concept: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.FLOAT(6, 2)
  },
  date: {
    type: DataTypes.DATE
  },
  type: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});
