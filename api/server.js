const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

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

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running perfectly on port 5000!");
});
