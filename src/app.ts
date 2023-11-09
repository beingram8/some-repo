import express, { Application } from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import genericErrorHandler from './middlewares/errorHandler';
import routes from './routes';
import Config from './config/appConfig';

const NODE_ENV = Config.NODE_ENV;
const app: Application = express();

//middlewares
app.use(cors({ origin: '*' }));

app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(helmet());

// Prevent parameter pollution
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(genericErrorHandler);

export default app;
