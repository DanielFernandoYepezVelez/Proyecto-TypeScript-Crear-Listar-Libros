import mongoose from "mongoose";
import { mongodb } from "./keys";

mongoose
  .connect(mongodb.URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`DB Is Connected`))
  .catch((err) => console.log(err));
