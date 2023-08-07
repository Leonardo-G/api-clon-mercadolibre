import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from '../model/products.model';
import { Model, Types } from 'mongoose';
import { CreateProductsDTO } from '../dto/products.dto';
import { SearchQuerys } from '../dto/queryProducts.dto';

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
          $casSensitive: false,
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
      query.in('paths', [searchQuerys.tags]);
    }

    if (searchQuerys.price_lte) {
      query.lte(searchQuerys.price_lte);
    }

    if (searchQuerys.price_gte) {
      query.gte(searchQuerys.price_gte);
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
        .exec(),
      query.countDocuments().exec(),
    ]);

    const newProducts = products.map((p) => {
      const {
        category,
        subCategory,
        characteristics,
        characteristicsDetail,
        description,
        stock,
        sold,
        __v,
        ...productsLigth
      } = p;

      return productsLigth;
    });

    return {
      products: newProducts,
      totalProducts: total,
    };
  }

  async getProductsByOffer(limit: number, skip: number) {
    const products = await this.productsModel
      .find({ offer: true })
      .skip(skip)
      .limit(limit);

    const newProducts = products.map((p) => {
      const {
        category,
        subCategory,
        characteristics,
        characteristicsDetail,
        description,
        stock,
        sold,
        __v,
        ...productsLigth
      } = p;

      return productsLigth;
    });

    return {
      products: newProducts,
    };
  }

  async getProductsBySubCategory(subCategory: string) {
    const products = await this.productsModel.find({
      subCategory: { $in: subCategory },
    });

    const newProducts = products.map((p) => {
      const {
        category,
        subCategory,
        characteristics,
        characteristicsDetail,
        description,
        stock,
        sold,
        __v,
        ...productsLigth
      } = p;

      return productsLigth;
    });

    return {
      products: newProducts,
    };
  }
}
