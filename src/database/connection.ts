import mongoose, { Connection } from "mongoose";
import Config from "../config/appConfig";
import logger from "../middlewares/logger";

export async function startConnection(): Promise<Connection> {
  try {
    const db = await mongoose.connect(Config.MONGO_HOST);
    logger.info("Database connected");
    return db.connection;
  } catch (error) {
    logger.error("Error connecting to database:", error);
    throw error;
  }
}
