import { Router } from "express";

import { 
  createMovement,
  deleteMovement,
  readMovement,
  readMovements,
  totalExpenses,
  totalIncome,
  updateMovement
} from '../controllers/budget.controller.js';

const router = Router();

router.post('/budget', createMovement);
router.get('/budget', readMovements);
router.get('/budget/:id', readMovement);
router.put('/budget/:id', updateMovement);
router.delete('/budget/:id', deleteMovement);

router.get('/expenses/:id', totalExpenses);
router.get('/income/:id', totalIncome);

export default router;