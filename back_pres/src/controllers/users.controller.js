import { UserSchema } from '../models/Users.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await UserSchema.findOne({ where: { username: username } });

    if (!user) 
      return res.status(404).json({ message: 'Searched user does not exist' })

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: message.error })
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

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const foundUser = await UserSchema.findByPk(id);

    foundUser.username = username;
    foundUser.password = password;

    await foundUser.save();

    res.json(foundUser);
  } catch (error) {
    return res.status(500).json({ message: message.error })
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    UserSchema.destroy({
      where: {
        id: id
      }
    });
  
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: message.error })
  }
};
