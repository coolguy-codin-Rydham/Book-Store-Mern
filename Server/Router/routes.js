import express from "express";
import { handleCreateNewBook, handleDeleteBookById, handleGetBookAllBooks, handleGetBookById, handlePutBookById } from "../Controllers/index.js";

const BookRouter = express.Router()

BookRouter.route("/")
.post(handleCreateNewBook)  // Works
.get(handleGetBookAllBooks) // Works

BookRouter.route("/:id")
.get(handleGetBookById)
.put(handlePutBookById)
.delete(handleDeleteBookById)


export default BookRouter