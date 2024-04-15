const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tourRoutes = require('./router/tourRoutes.js');
const userRoutes = require('./router/userRouter.js');
const authRoute = require('./router/authRoute.js');
const bookingRoute = require('./router/bookRouter.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
const corsOptions ={
  origin: true,
  credentials: true,
};

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected");
  } catch (err) {
    console.error(err);
    console.log("MongoDB database connection failed");
  }
};

// Testing
app.get("/", (req, res) => {
  res.send(`Backend is running on port ${port}`);
});

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/booking', bookingRoute);

app.listen(port, () => {
  connect();
  console.log(`Server is listening on port ${port}`);
});
