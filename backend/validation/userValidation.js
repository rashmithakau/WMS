import Joi from 'joi';

export const userValidationSchema = Joi.object({
  userName: Joi.string().required()
    .messages({
      'string.empty': 'Username is required',
    }),
  phoNumber: Joi.string().pattern(/^0\d{9}$/).required()
    .messages({
      'string.pattern.base': 'Phone number must be 10 digits and start with 0',
    }),
  password: Joi.string().min(8).required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
    }),
});
