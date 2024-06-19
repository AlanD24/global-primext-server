const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  expenseName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },

});

module.exports = mongoose.model('Expense', expenseSchema);