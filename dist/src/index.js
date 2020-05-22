"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Llamados */
require("./config/database");
/* Dependencies */
const express_1 = __importDefault(require("express"));
const handlebars_1 = __importDefault(require("handlebars")); /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access"); /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const books_1 = __importDefault(require("./routes/books"));
/* Initializations */
const app = express_1.default();
/* Settings */
app.set("port", process.env.PORT || 3000);
/* Para avisarle a handlebars donde esta la carpeta de las vistas */
app.set("views", path_1.default.join(__dirname, "views"));
app.engine(".hbs", express_handlebars_1.default({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials"),
    helpers: require("./helpers/helper"),
    handlebars: allow_prototype_access_1.allowInsecurePrototypeAccess(handlebars_1.default) /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */,
}));
app.set("view engine", ".hbs");
/* Middlewares */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan_1.default("dev"));
/* Routes */
app.use(index_1.default);
app.use("/books", books_1.default);
/* Static Files */
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
/* Server The Starting */
app.listen(app.get("port"), () => {
    console.log(`Server On Port ${app.get("port")}`);
});
