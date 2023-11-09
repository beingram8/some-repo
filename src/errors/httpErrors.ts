import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { ErrorTypes } from '../types/common';

export class CustomError extends Error {
	public readonly name: string;
	public readonly httpCode: StatusCodes;

	constructor(name: string, httpCode: StatusCodes, description: string) {
		super(description);
		Object.setPrototypeOf(this, new.target.prototype);
		this.name = name;
		this.httpCode = httpCode;

		Error.captureStackTrace(this);
	}
}

export class NotFoundError extends CustomError {
	constructor(description: string = ReasonPhrases.NOT_FOUND) {
		super(ErrorTypes.NotFoundError, StatusCodes.NOT_FOUND, description);
	}
}

export class UnauthorizedError extends CustomError {
	constructor(description: string = ReasonPhrases.UNAUTHORIZED) {
		super(ErrorTypes.UnauthorizedError, StatusCodes.UNAUTHORIZED, description);
	}
}

export class BadRequestError extends CustomError {
	constructor(description: string = ReasonPhrases.BAD_REQUEST) {
		super(ErrorTypes.BadRequestError, StatusCodes.BAD_REQUEST, description);
	}
}

export class ForbiddenError extends CustomError {
	constructor(description: string = ReasonPhrases.FORBIDDEN) {
		super(ErrorTypes.ForbiddenError, StatusCodes.FORBIDDEN, description);
	}
}
