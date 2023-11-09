import { Request, Response, NextFunction } from 'express';

export enum Constants {
	success = 'success',
	error = 'error'
}

export enum ErrorTypes {
	NotFoundError = 'NotFoundError',
	UnauthorizedError = 'UnauthorizedError',
	BadRequestError = 'BadRequestError',
	ForbiddenError = 'ForbiddenError',
	ValidationError = 'ValidationError'
}

export type ControllerFunction = (
	req: Request,
	res: Response,
	next: NextFunction
) => void;

export interface SendResponseParams<T> {
	res: Response;
	status?: string;
	statusCode?: number;
	message?: string;
	data?: T;
}
