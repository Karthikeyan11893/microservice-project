import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import gatewayRoutes from './routes/gateway.routes';

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', gatewayRoutes);

export default app;
