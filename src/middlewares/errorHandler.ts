import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/errorClass';
import Joi from 'joi';
import { Constants } from '../types/common';
import { ReasonPhrases } from 'http-status-codes';
import logger from './logger';

const globalErrorHandler = (
	err: Error | Joi.ValidationError,
	req: Request,
	res: Response,
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.httpCode).json({
			status: Constants.error,
			message: err.message
		});
	}

	if (err instanceof Joi.ValidationError) {
		return res.status(400).json({
			status: Constants.success,
			message: err.message,
			details: err.details
		});
	}

	logger.error(err);

	return res.status(500).json({
		status: Constants.error,
		message: ReasonPhrases.INTERNAL_SERVER_ERROR
	});
};

export default globalErrorHandler;
