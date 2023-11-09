import mongoose, { Connection } from "mongoose";
import Config from "../config/appConfig";
import logger from "../middlewares/logger";
import { LogMessages } from "../constants/constants";

export async function startConnection(): Promise<Connection> {
  try {
    const db = await mongoose.connect(Config.MONGO_HOST);
    logger.info(LogMessages.DATABASE_CONNECTED);
    return db.connection;
  } catch (error) {
    logger.error(LogMessages.DATABASE_CONNECTION_ERROR, error);
    throw error;
  }
}

export async function closeDatabaseConnection(): Promise<void> {
  try {
    await mongoose.connection.close();
    logger.info(LogMessages.DATABASE_CONNECTION_CLOSED);
  } catch (error) {
    logger.error(LogMessages.DATABASE_CLOSE_ERROR, error);
    throw error;
  }
}
