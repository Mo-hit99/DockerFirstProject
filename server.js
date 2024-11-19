import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { MONGO_IP, MONGO_PASS, MONGO_PORT, MONGO_USER, REDIS_PORT, REDIS_URL, SESSION_SECRET } from './config/config.js';
import Post_routes from './routes/Post_Routes.js';
import User_router from './routes/User_Routes.js';
import session from 'express-session';
import Redis from 'redis'
import connectRedis from 'connect-redis';
dotenv.config()

const RedisStore = connectRedis(session)
const redisClient = Redis.createClient({
    url: `redis://${REDIS_URL}:${REDIS_PORT}`, // Update with your Redis server configuration
})
// Connect to Redis
redisClient.on('error',(err)=> console.error('error lookup for ---->>',err))
redisClient.connect().catch((err) => console.error('Redis connection error:', err));
const store = new RedisStore({
    client: redisClient,
    prefix: 'session:', // Optional: custom prefix for session keys
});
const app = express();
const PORT = process.env.Port || 4000;
const connectWithRetry = ()=>{
    const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
    mongoose.connect(mongoURL).then(()=> console.log('connected to db')).catch(error=>{console.log('issue---->>',error), setTimeout(() => {
        connectWithRetry
    }, 5000);})
}
connectWithRetry()

app.enabled('trust proxy')
// app.use(session({
//     store,
//     secret:SESSION_SECRET,
//     cookie:{
//         resave:false,
//         saveUninitialized:false,
//         secure:false,
//         httpOnly:true,
//         maxAge:3000,
//     }
// }))

app.use(express.json())
app.get('/api/v1',(req,res)=>{
    res.send('<h2>hi there !!!!dasdasdasdasd</h2>')
    console.log('yeah it ran')
})
// app.use((req, res, next) => {
//     try {
//         const sessionData = JSON.stringify(req.session);
//         // Ensure session data is valid JSON
//         JSON.parse(sessionData);
//     } catch (e) {
//         console.error('Invalid session data:', e);
//         req.session.destroy(); // Destroy the corrupted session
//     }
//     next();
// });
app.use('/api/v1/posts',Post_routes);
app.use('/api/v1/users',User_router);
app.listen( PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})