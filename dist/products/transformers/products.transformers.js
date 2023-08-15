"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductShort = void 0;
class ProductShort {
    constructor(product) {
        this._id = product._id;
        this.idUser = product.idUser;
        this.tags = product.tags;
        this.condition = product.condition;
        this.created = product.condition;
        this.imgProduct = product.imgProduct;
        this.interests = product.interests;
        this.offer = product.offer;
        this.shipping = product.shipping;
        this.priceDetail = product.priceDetail;
        this.title = product.title;
        this.visited = product.visited;
        this.recommended = product.recommended;
    }
}
exports.ProductShort = ProductShort;
//# sourceMappingURL=products.transformers.js.map