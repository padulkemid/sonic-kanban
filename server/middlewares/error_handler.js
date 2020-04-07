const errorHandler = (err, req, res, next) => {
  if (err.name == 'SequelizeValidationError') {
    res.status(400).json({ status: 400, message: err.errors[0].message });
  } else if (err.message.includes('password')) {
    res.status(403).json({ status: 403, message: err.message });
  } else if (err.message) {
    res.status(404).json({ status: 404, message: err.message });
  } else {
    res.status(500).json({ status: 500, message: 'Internal server error!' });
  }
};

module.exports = errorHandler;
