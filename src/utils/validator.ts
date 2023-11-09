import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateSchema =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
		error ? next(error) : next();
  };

export default validateSchema;