import express from 'express';
import bodyParser from 'body-parser';
import { DataBase } from './src/models/DatabaseConnet';
import router from './src/Routers/api.router';
import cors from 'cors';

const PORT = 3080;
const app = express();
DataBase.connectDB()
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(err.message));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: true, credential: true }));
app.use('/api', router);
app.listen(PORT, 'localhost', () =>
  console.log(`App is running at http://localhost:${PORT}`)
);
