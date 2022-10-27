import { UserSchema } from '../models/Users.js';

export const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.findAll();
    res.status(200).json(users);
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

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (username === '' || email === '' || password === '')
    res.status(400).json({ message: 'It has empty fields' });
  else {
    try {
      const newUser = await UserSchema.create({
        username,
        email,
        password
      });

      res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
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

    res.status(201).json(foundUser);
  } catch (error) {
    return res.status(500).json({ message: error.message })
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
  
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await UserSchema.findOne({ where: { email: email } });

    if (!user) return res.status(403).json({ message: "There is no user" });

    if (password !== user.password) 
              return res.status(403).json({ message: "Incorrect password" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
