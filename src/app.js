import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json';
import {createRoles} from './libs/initialSetup';
import productRoute from './routes/products.routes';
import authRoute from './routes/auth.routes';
import userRoute from './routes/user.routes';

const app = express();
createRoles();

app.set('pkg', pkg);

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products', productRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

export default app;