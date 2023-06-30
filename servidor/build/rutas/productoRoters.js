"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controllers/productoController"));
class ProductoRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.default.lista);
        this.router.post('/', productoController_1.default.crearProducto);
        this.router.put('/');
        this.router.put('/:codigo', productoController_1.default.actualizar);
        this.router.delete('/:codigo', productoController_1.default.borrar);
        this.router.get('/:codigo', productoController_1.default.buscar);
    }
}
const prodcutoRouters = new ProductoRouters();
exports.default = prodcutoRouters.router;
