import express from 'express';
import { dbConnect } from '../utils/dbConnect.js';
import dotenv from 'dotenv'
import userRoutes from './Routes/User.js';

dotenv.config()

const PORT = 5000;
const app = express();


const runServer = async (fn) => {
    try{
        const response = await dbConnect();
        console.log('Database connected successfully')
        fn()
    }catch(err){
        console.log('Error happened while connecting database')
        console.error(err)
    }
}


runServer(() => {
    //Start the server

    app.use('/api/user', userRoutes)
    
    app.listen(PORT, () => {
        console.log(`Server is listning at port ${PORT}`)
    })
})