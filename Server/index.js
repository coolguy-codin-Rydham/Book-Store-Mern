import express from "express";
const app = express();
import dotenv from "dotenv";
import { Book } from "./models/bookModel.js";
import BookRouter from "./Router/routes.js";
import mongoose from "mongoose";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/books", BookRouter)

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Mongo is on baby");
    app.listen(process.env.PORT, () => {
      console.log("Listening at http://localhost:" + process.env.PORT);
    });
  })
  .catch((e) => console.log(e));
