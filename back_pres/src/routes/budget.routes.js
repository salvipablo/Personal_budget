import { Router } from "express";

import { 
  createMovement,
  deleteMovement,
  readMovement,
  readMovements,
  updateMovement
} from '../controllers/budget.controller.js';

const router = Router();

router.post('/budget', createMovement);
router.get('/budget', readMovements);
router.get('/budget/:id', readMovement);
router.put('/budget/:id', updateMovement);
router.delete('/budget/:id', deleteMovement);

export default router;