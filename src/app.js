import dotenv from 'dotenv';
import './database';
import {resolve} from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';

dotenv.config();

const whitelist = [
  'http://localhost:3000',
  'http://34.95.161.242'
];

const corsOptions = {
  origin: function(origin, callback){
    if(whitelist.indexOf(origin) !== -1 || !origin){
       callback(null, true);
    }else{
      callback(new Error('Not allowed by CORS'));
    }
  }
}

class App {
  constructor() {
    this.app = express();
    this.middlwares();
    this.routes();
  }

  middlwares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet())
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
