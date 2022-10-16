import { Router } from "express"

import { 
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser
} from '../controllers/users.controller.js';

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:username', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
