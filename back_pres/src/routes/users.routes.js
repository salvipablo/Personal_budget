import { Router } from "express"

import { 
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsersMovements
} from '../controllers/users.controller.js';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:username', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/users/:id/movements', getUsersMovements);

export default router;