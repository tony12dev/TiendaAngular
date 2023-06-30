"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Puedes acceder a /app/productos y todo lo demas' });
    }
}
exports.indexController = new IndexController();
