import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { BudgetSchema } from './Budget.js';

export const UserSchema = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

UserSchema.hasMany(BudgetSchema, {
  foreignKey: 'iduser',
  sourceKey: 'id'
});

BudgetSchema.belongsTo(UserSchema, {
  foreignKey: 'iduser',
  targetID: 'id'
});
