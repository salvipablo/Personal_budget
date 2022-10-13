import { Router } from "express";

import { 
  createMovement,
  deleteMovement,
  readMovement,
  readMovements,
  totalExpenses,
  totalIncome,
  updateMovement,
  getUsersMovements,
  currentBalance
} from '../controllers/budget.controller.js';

const router = Router();

router.post('/budget', createMovement);
router.get('/budget', readMovements);
router.get('/budget/:id', readMovement);
router.put('/budget/:id', updateMovement);
router.delete('/budget/:id', deleteMovement);
router.get('/budget/:id/movements', getUsersMovements);

router.get('/currentBalance/:id', currentBalance);
router.get('/income/:id', totalIncome);
router.get('/expenses/:id', totalExpenses);

export default router;
