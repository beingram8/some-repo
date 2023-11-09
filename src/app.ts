import express, { Application } from 'express';
import genericErrorHandler from './middlewares/errorHandler';
import routes from './routes';
import { useCommonMiddlewares } from './middlewares/common';

const app: Application = express();

//middlewares
useCommonMiddlewares(app);

app.use('/api', routes);

app.use(genericErrorHandler);

export default app;
