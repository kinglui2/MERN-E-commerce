import Joi from "joi";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export default function ValidateLogDetails(req, res, next){
    const {error} = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ errors: error.details.map(err => err.message) });
      }
    next();
}