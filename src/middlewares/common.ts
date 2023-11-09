import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import Config from '../config/appConfig';

export const useCommonMiddlewares = (app: express.Application) => {
  app.use(cors({ origin: '*' }));
  app.use(morgan(Config.NODE_ENV === 'production' ? 'combined' : 'dev'));
  app.use(helmet());
  app.use(hpp());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
