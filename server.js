const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDb = require('./config/db');

const userRouter = require('./routes/userRoutes');

dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
connectDb();

app.use('/v1', userRouter);

app.get('/', (req, res) => {
  res.send(`<h1>Please visit the following link</h1>`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server app is listening on ${process.env.PORT}`);
});
