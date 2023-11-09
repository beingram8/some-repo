import winston, { format } from 'winston';
import path from 'path';
import fs from 'fs';
import Config from '../config/appConfig';

const logsDir = path.join(__dirname, '../..', 'logs');

if (!fs.existsSync(logsDir)) {
	fs.mkdirSync(logsDir);
}

const logger: winston.Logger = winston.createLogger({
	level: Config.NODE_ENV === 'production' ? 'info' : 'debug',
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.colorize(),
		format.simple()
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({
			filename: path.join(logsDir, 'error.log'),
			level: 'error'
		}),
		new winston.transports.File({
			filename: path.join(logsDir, 'combined.log')
		})
	]
});

export default logger;
