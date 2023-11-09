import dotenv from "dotenv";
dotenv.config();

const baseConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  MONGO_HOST: process.env.MONGO_HOST || "",
};

let envConfig = {};

switch (process.env.NODE_ENV) {
  case "development":
    envConfig = {
      ...baseConfig,
    };
    break;
  case "test":
    envConfig = {
      ...baseConfig,
    };
    break;
  case "production":
    envConfig = {
      ...baseConfig,
    };
    break;
}

const Config = Object.freeze({ ...baseConfig, ...envConfig });
export default Config;
