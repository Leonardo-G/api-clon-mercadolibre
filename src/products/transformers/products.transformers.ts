import { Products } from '../model/products.model';

export class ProductShort {
  readonly idUser;
  readonly tags;
  readonly condition;
  readonly interests;
  readonly shipping;
  readonly priceDetail;
  readonly offer;
  readonly created;
  readonly visited;
  readonly recommended;
  readonly imgProduct;
  readonly title;
  readonly _id;

  constructor(product: Products) {
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
