// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

import { Redis } from '@upstash/redis'
// import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config();



export const redis = Redis.fromEnv()
// export const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL)


await redis.set("foo","bar")

// redis is key value store 
