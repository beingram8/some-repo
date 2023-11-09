import { Constants } from '../types/common';
import { SendResponseParams } from '../types/common';

export const sendResponse = <T>({
	res,
	status = Constants.success,
	message,
	data,
	statusCode = 200
}: SendResponseParams<T>): void => {
	res.status(statusCode).json({
		status,
		message,
		data
	});
};
