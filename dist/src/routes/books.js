"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("../controllers/book.controller");
const router = express_1.Router();
router.get("/", book_controller_1.bookController.indexBook);
router.get("/add", book_controller_1.bookController.renderForBook);
router.post("/add", book_controller_1.bookController.saveBook);
exports.default = router;
