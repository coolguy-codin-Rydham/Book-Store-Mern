import { Book } from "../models/bookModel.js";

export const handleCreateNewBook = async (req, res) => {
  try {
    if (!req.body.tit || !req.body.auth || !req.body.publish_year) {
      res.status(400).json({
        message: "Send all required fields : title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.tit,
      author: req.body.auth,
      publishYear: req.body.publish_year,
    };
    const book = await Book.create(newBook);
    res.status(201).json({ book: book });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const handleGetBookAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: e.message });
  }
};

export const handleGetBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById({
      _id: id,
    });
    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

export const handlePutBookById =  async (req, res) => {
  try {
    if (!req.body.tit || !req.body.auth || !req.body.publish_year) {
      return res.status(400).json({
        message: "Send all required fields : title, author, publishYear",
      });
    }
    const updateInfo = {
      title: req.body.tit,
      author: req.body.auth,
      publishYear: req.body.publish_year,
    };
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, updateInfo);

    if (!book) return res.status(404).json({ message: "Book not Found" });

    return res.status(200).json({
      status: "Update Succesful",
      book: book,
    });
  } catch (e) {
    console.error(e.message);
    return res.status(500).json("Server Error");
  }
}

export const handleDeleteBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: "Book not Found",
      });
    }

    return res.status(200).json({
      status: "Deleted Successfully",
      message: result,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}