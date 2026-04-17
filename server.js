const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      // and 'null' origin which happens when opening HTML files via file:///
      if (!origin || origin === 'null') return callback(null, true);
      const isLocalhost = /^https?:\/\/localhost:\d+$/.test(origin);
      if (isLocalhost) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/flights", require("./routes/flightRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
