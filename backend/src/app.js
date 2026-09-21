const express = require("express");
const cors = require("cors");

const reviewsRoutes = require("./routes/reviews.routes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
  })
);

app.use(express.json());

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "De Mentee backend is running"
  });
});

/*
|--------------------------------------------------------------------------
| Google Reviews
|--------------------------------------------------------------------------
*/

app.use("/api/google-reviews", reviewsRoutes);

module.exports = app;