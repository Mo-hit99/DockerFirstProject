import dotenv from 'dotenv'
dotenv.config()
export const MONGO_IP = process.env.MONGO_IP || 'mongo';
export const  MONGO_PORT = process.env.MONGO_PORT || 27017;
export const  MONGO_USER = process.env.MONGO_USER;
export  const MONGO_PASS = process.env.MONGO_PASS;

export const REDIS_URL = process.env.REDIS_URL || 'redis';
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const SESSION_SECRET = process.env.SESSION_SECRET;