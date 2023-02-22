import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "This is the Ecommerce App Server!",
  });
});

app.listen(8800, (req, res) => {
  console.log("App Running Perfectly on Port 8800!");
});
