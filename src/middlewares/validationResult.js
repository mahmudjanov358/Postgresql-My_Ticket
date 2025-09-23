// <==========> <==========> <==========>
// <===== VALIDATION RESULT MIDDLEWARE FILE =====>
// <==========> <==========> <==========>

// <===== VALIDATION RESULT MIDDLEWARE =====>
exports.validationResult = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  } else {
    next();
  }
};
