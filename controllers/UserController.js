/* Expenses methods */
const test = async function(req, res, next) {
  try {
      res.send({ status: 200, message: 'User controller working' });
  } catch (error) {
      res.status(500).message({ message: 'INTERNAL SERVER ERROR' });
  }
}

// Export methods
module.exports = {
  test
}