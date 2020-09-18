import * as dotenv from 'dotenv';

dotenv.config();

const {
  CLICKHOUSE_URL,
} = process.env

export {
  CLICKHOUSE_URL,
}
