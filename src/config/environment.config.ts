import { registerAs } from '@nestjs/config';

export default registerAs('environment', () => ({
  mongo: process.env.DB_URL_MONGODB_CONNECTION,
  secret: process.env.SECRET_JWT,
  port: process.env.PORT || 3000,
}));
