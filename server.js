
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import protectedRoutes from "./routes/protectedRoutes.js";

dotenv.config(); 
connectDB();        

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());


app.use('/api/auth', userRoutes);
app.use("/api", protectedRoutes);


app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});