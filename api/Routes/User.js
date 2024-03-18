import express from 'express'
import { testApi } from '../Controller/User.js';


const routes =  express.Router();


routes.get('/test', testApi)

export default routes