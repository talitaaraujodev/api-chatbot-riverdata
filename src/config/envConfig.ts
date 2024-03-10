import * as dotenv from 'dotenv';
dotenv.config();

export default {
  serverPort: Number(process.env.PORT) || 4009,
};
