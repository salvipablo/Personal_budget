import { BudgetSchema } from '../models/Budget.js'

export const createMovement = async (req, res) => {
  const { concept, amount, date, type, iduser } = req.body;

  let dateMov = new Date(date);
  console.log(date);
  console.log(dateMov);

  try {
    const newMovement = await BudgetSchema.create({
      concept: concept,
      amount: amount,
      date: dateMov,
      type: type,
      iduser: iduser
    });

    res.json(newMovement);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const readMovements = async (req, res) => {
  try {
    const movements = await BudgetSchema.findAll();
    res.json(movements);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const readMovement = async (req, res) => {
  const { id } = req.params;

  try {
    const movement = await BudgetSchema.findOne({ where: { id: id } });

    if (!movement) 
      return res.status(404)
                        .json({ message: 'searched movement does not exist' })

    res.json(movement);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// Actualizar un movimiento.
export const updateMovement = async (req, res) => {
  const { id } = req.params;
  const { concept, amount, date, type } = req.body;

  try {
    const foundMovement = await BudgetSchema.findByPk(id);

    foundMovement.concept = concept;
    foundMovement.amount = amount;
    foundMovement.date = date;
    foundMovement.type = type;

    await foundMovement.save();

    res.json(foundMovement);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteMovement = async (req, res) => {
  const { id } = req.params;

  try {
    BudgetSchema.destroy({
      where: {
        id: id
      }
    });
  
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
