import joi from "joi";
import validateSchema from "../utils/validator";

export const userSchema = joi.object({
  name: joi.string().required(),
});

export const createUser = validateSchema(userSchema);
