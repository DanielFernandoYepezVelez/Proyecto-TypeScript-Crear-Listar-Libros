import { Request, Response } from "express";

import bookModel, { Book } from "../models/Book";

class BookController {
  public async indexBook(req: Request, res: Response): Promise<void> {
    const books: Book[] = await bookModel.find();

    // console.log(books); Aqui Estaba El Error De Acceso Denegado
    res.render("books/index", { books });
  }

  public renderForBook(req: Request, res: Response): void {
    res.render("books/add");
  }

  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;

    const newBook: Book = new bookModel({
      title,
      author,
      isbn,
    });

    await newBook.save();

    res.redirect("/books");
  }
}

export const bookController = new BookController();
