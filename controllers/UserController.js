const User = require('../models/user');

/* Test method */
const test = async function(req, res, next) {
  try {
      res.send({ status: 200, message: 'User controller working' });
  } catch (error) {
      res.status(500).message({ message: 'INTERNAL SERVER ERROR' });
  }
}

const getUsers = async function(req, res, next) {
  try {
    const usersList = await User.findAll();
    res.status(201).json({
      data: usersList
    });
  } catch (error) {
    res.status(500).json({ 
      message: "There was an error retrieving users list",
      error: error.message
    });
  }
}

const createUser = async function(req, res, next) {
  try {
    const { name, paternal_surname, maternal_surname, address, phone } = req.body;

    // Create register in DB
    const newUser = await User.create({
      name,
      paternal_surname,
      maternal_surname,
      address,
      phone: phone.toString(),
    });

    // Send response after creating user
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ 
      message: "There was an error while creating the user",
      error: error.message
    });
  }
}

const editUser = async function(req, res, next) {
  try {
    const { id, name, paternal_surname, maternal_surname, address, phone } = req.body;

    // Update register in DB
    const editedUser = await User.update({
      name,
      paternal_surname,
      maternal_surname,
      address,
      phone: phone.toString(),
    }, {
      where: { id }
    });

    // Send response after editing user
    res.status(201).json({
      message: 'User updated successfully',
      user: editedUser
    });
  } catch (error) {
    res.status(500).json({ 
      message: "There was an error while updating the user",
      error: error.message
    });
  }
}

const deleteUser = async function(req, res, next) {
  try {
    const { id } = req.params;
    
    // Create register in DB
    const deletedUser = await User.destroy({
      where: { id }
    });

    // Send response after editing user
    res.status(201).json({
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    res.status(500).json({ 
      message: "There was an error while deleting the user",
      error: error.message
    });
  }
}

// Export methods
module.exports = {
  test,
  getUsers,
  createUser,
  editUser,
  deleteUser
}