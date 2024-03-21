import CheckoutRouter from './routes/checkout'
import CustomerRouter from './routes/customer'
import portalRoute from './routes/portal'
import CreateUserRoute from './routes/createUser'
import subscriptionRoute from './routes/subscription'
import webhookRoute from './routes/webhook'
import express, { Request, Response } from 'express';
import checkuserRoute from './routes/checkUser'
import addProfileRoute from './routes/addprofileRoute'
import deleteProfile from './routes/deleteProfileRoute'
import addMovies from './routes/addmoviesRoute'
import getallmovies from './routes/getallmovies'
import getallProfile from './routes/getallProfileRoute'
import updateProfileRoute from './routes/updateProfileRoute'
import getProfileRouter from './routes/getProfileRouter'
import deleteMovies from './routes/deletemoviesRoute'
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
app.use(updateProfileRoute)
app.use(getallProfile)
app.use(getProfileRouter)
app.use(getallmovies)
app.use(addMovies)
app.use(deleteProfile)
app.use(addProfileRoute)
app.use(CustomerRouter)
app.use(portalRoute)
app.use(subscriptionRoute)
app.use(CreateUserRoute)
app.use(webhookRoute)
app.use(checkuserRoute)
app.use(deleteMovies)


app.listen(4242, () => console.log('Running on port 4242'));





 
