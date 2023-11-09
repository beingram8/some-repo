import dotenv from "dotenv";
dotenv.config();

const Config = Object.freeze({
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  MONGO_HOST: process.env.MONGO_HOST || "",
});

export default Config;
