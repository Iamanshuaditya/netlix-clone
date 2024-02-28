import CheckoutRouter from './routes/checkout'
import CustomerRouter from './routes/customer'
import portalRoute from './routes/portal'
import subscriptionRoute from './routes/subscription'
import webhookRoute from './routes/webhook'
import express, { Request, Response } from 'express';
import { admin } from './services/firebaseService'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
const serviceAccount = require('../src/servicekey.json');

app.get('/', (req: Request, res: Response) => {
  res.send('hwllo world')
})

app.use(CheckoutRouter)
app.use(CustomerRouter)
app.use(portalRoute)
app.use(subscriptionRoute)
app.use(webhookRoute)


app.listen(4242, () => console.log('Running on port 4242'));





 
