// import 
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from './db/connectToMongoDB.js'

dotenv.config();
// const var
const app = express();
const PORT = process.env.PORT || 5000;



// middleware

app.use(express.json());  // to parse the imcoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.get("/", (req, res) => {
    // root route : http://localhost::3000/
    res.send('Server is ready !');
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
});

