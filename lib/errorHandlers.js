const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

const sendErrorMessage = (error, req, res, next) => {
  const status = error.status || 400;
  const message = error.message || 'Bad Request !';

  res.status(status).json({ status, message });
};

module.exports = {
  catchErrors,
  sendErrorMessage
};
