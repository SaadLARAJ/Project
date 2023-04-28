import { createConnection } from "typeorm";

export const connectDatabase = async () => {
  try {
    const connection = await createConnection();
    console.log(`Connected to database: ${connection.options.database}`);
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};
