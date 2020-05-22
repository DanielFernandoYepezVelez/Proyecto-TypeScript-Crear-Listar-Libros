import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Book extends mongoose.Document {
  title: string;
  author: string;
  isbn: string;
}

const bookSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
});

export default model<Book>("Book", bookSchema);
