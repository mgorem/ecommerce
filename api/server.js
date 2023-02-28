const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running perfectly on port 5000!");
});
