const yup = require("yup");

const validate = async function (req, res, next) {
  try {
    const schema = yup.object().shape({
      nom: yup.string().required(),
      mat: yup.string().required(),
      status: yup.boolean().required(),
      NumTel: yup.number().required(),
    });

    await schema.validate(req.body);
    next();
  } catch (err) {
    res.send(err.errors);
  }
};

module.exports = validate;
