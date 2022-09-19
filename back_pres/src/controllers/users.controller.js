import { UserSchema } from '../models/Users.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await UserSchema.create({
      username,
      password
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
