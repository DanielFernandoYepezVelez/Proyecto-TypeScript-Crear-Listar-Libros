"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    constructor() { }
    index(req, res) {
        res.render("index");
    }
}
exports.indexController = new IndexController();
