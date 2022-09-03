import * as productsController from '../controllers/productsController';
import * as basketsController from '../controllers/basketsController';
import { RouteOptions } from 'fastify';
import {
  AddProductSchema,
  GetProductSchema,
  GetProductsSchema,
  PutProductSchema,
  DeleteProductSchema,
} from './documentation/productsApiSchema';
import { AddBasketSchema, GetBasketSchema } from './documentation/basketApiSchema';

const getProductsRoute: RouteOptions = {
  method: 'GET',
  url: '/api/products',
  handler: productsController.getProducts,
  schema: GetProductsSchema,
};

const getProductRoute: RouteOptions = {
  method: 'GET',
  url: '/api/products/:id',
  handler: productsController.getSingleProduct,
  schema: GetProductSchema,
};

const postProductRoute: RouteOptions = {
  method: 'POST',
  url: '/api/products',
  handler: productsController.addProduct,
  schema: AddProductSchema,
};

const putProductRoute: RouteOptions = {
  method: 'PUT',
  url: '/api/products/:id',
  handler: productsController.updateProduct,
  schema: PutProductSchema,
};

const deleteProductRoute: RouteOptions = {
  method: 'DELETE',
  url: '/api/products/:id',
  handler: productsController.deleteProduct,
  schema: DeleteProductSchema,
};

const getBasketRoute: RouteOptions = {
  method: 'GET',
  url: '/api/basket/:id',
  handler: basketsController.getBasket,
  schema: GetBasketSchema,
};

const postBasketRoute: RouteOptions = {
  method: 'POST',
  url: '/api/basket',
  handler: basketsController.addBasket,
  schema: AddBasketSchema,
};

const routes = [
  getProductsRoute,
  getProductRoute,
  postProductRoute,
  putProductRoute,
  deleteProductRoute,
  getBasketRoute,
  postBasketRoute,
];

export default routes;
