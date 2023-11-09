import app from "./app";
import Config from "./config/appConfig";
import { startConnection } from "./database/connection";
import logger from "./middlewares/logger";
import process from "process";

const server = app.listen(Config.PORT, async () => {
  await startConnection();
  logger.info(`Connected successfully on port ${Config.PORT}`);
});

// Graceful shutdown logic
const gracefulShutdown = (signal: string) => {
  logger.info(`${signal} signal received: closing HTTP server`);
  server.close(() => {
    logger.info("HTTP server closed");
    process.exit(0);
  });
};

// Capture uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

// Capture unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise} - reason: ${reason}`);
  process.exit(1);
});

// Listen for TERM signal .e.g. kill
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));

// Listen for INT signal e.g. Ctrl-C
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Prevent the process from closing immediately
process.stdin.resume();
