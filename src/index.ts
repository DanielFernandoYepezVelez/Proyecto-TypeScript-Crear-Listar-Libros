/* Llamados */
import "./config/database";

/* Dependencies */
import express from "express";
import Handlebars from "handlebars"; /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */
import exphbs from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access"; /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */
import morgan from "morgan";
import path from "path";

import indexRoute from "./routes/index";
import bookRoute from "./routes/books";

/* Initializations */
const app = express();

/* Settings */
app.set("port", process.env.PORT || 3000);

/* Para avisarle a handlebars donde esta la carpeta de las vistas */
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./helpers/helper"),
    handlebars: allowInsecurePrototypeAccess(
      Handlebars
    ) /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */,
  })
);
app.set("view engine", ".hbs");

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

/* Routes */
app.use(indexRoute);
app.use("/books", bookRoute);

/* Static Files */
app.use(express.static(path.join(__dirname, "./public")));

/* Server The Starting */
app.listen(app.get("port"), () => {
  console.log(`Server On Port ${app.get("port")}`);
});
