import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from '../model/products.model';
import { Model, Types } from 'mongoose';
import { CreateProductsDTO } from '../dto/products.dto';
import { SearchQuerys } from '../dto/queryProducts.dto';
import { ProductShort } from '../transformers/products.transformers';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModel: Model<Products>,
  ) {}

  async newProduct(id: Types.ObjectId, products: CreateProductsDTO) {
    const product = new this.productsModel({
      idUser: id,
      ...products,
    });

    await product.save();

    return product;
  }

  async findProductById(id: Types.ObjectId) {
    const product = await this.productsModel.findById(id).lean();

    return product;
  }

  async findProductsByQuerys(searchQuerys: SearchQuerys) {
    const query = this.productsModel.find();

    if (searchQuerys.search)
      query.where({
        $text: {
          $search: searchQuerys.search,
          $caseSensitive: false,
        },
      });

    if (searchQuerys.category) {
      query.in('category', [searchQuerys.category]);
    }

    if (searchQuerys.offer) {
      query.where('offer').equals(true);
    }

    if (searchQuerys.shipping) {
      query.where('shipping.code').equals(searchQuerys.shipping);
    }

    if (searchQuerys.interests && searchQuerys.until) {
      query.where('interests.accept').equals(true);
      query.where('interests.until').equals(searchQuerys.until);
    }

    if (searchQuerys.interests && !searchQuerys.until) {
      query.where('interests.accept').equals(true);
    }

    if (
      searchQuerys.condition === 'nuevo' ||
      searchQuerys.condition === 'usado' ||
      searchQuerys.condition === 'reacondicionado'
    ) {
      query.where('condition').equals(searchQuerys.condition);
    }

    if (searchQuerys.tags) {
      query.in('tags', [searchQuerys.tags]);
    }

    if (searchQuerys.price_lte && !searchQuerys.offer) {
      query.where('priceDetail.price').lte(searchQuerys.price_lte);
    }

    if (searchQuerys.price_gte && !searchQuerys.offer) {
      query.where('priceDetail.price').gte(searchQuerys.price_gte);
    }

    if (searchQuerys.price_lte && searchQuerys.offer) {
      query.where('priceDetail.offerPrice').lte(searchQuerys.price_lte);
    }

    if (searchQuerys.price_gte && searchQuerys.offer) {
      query.where('priceDetail.offerPrice').gte(searchQuerys.price_gte);
    }

    if (searchQuerys.sort === 'price_asc') {
      query.sort({
        'priceDetail.price': 1,
      });
    }

    if (searchQuerys.sort === 'relevant') {
      query.sort({
        visited: -1,
      });
    }

    const [products, total] = await Promise.all([
      query
        .skip(searchQuerys.skip || 0)
        .limit(searchQuerys.limit || 5)
        .lean(),
      query.clone().countDocuments().exec(), //use clone() for a new instance of the query
    ]);

    const newProducts = products.map((p) => {
      const productShort = new ProductShort(p);

      return productShort;
    });

    return {
      products: newProducts,
      totalProducts: total,
    };
  }

  async getProductsBySubCategory(subCategory: string) {
    const products = await this.productsModel.find({
      subCategory: { $in: subCategory },
    });

    const newProducts = products.map((p) => {
      const productShort = new ProductShort(p);

      return productShort;
    });

    return {
      products: newProducts,
    };
  }
}
