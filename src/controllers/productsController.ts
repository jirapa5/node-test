import Product from '../models/product';
// import { Document } from 'mongoose';

import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getProducts = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    // console.log('error: ', err);
    throw new Error('Internal server error');
    // throw err;
    // return {
    //   statusCode: 500,
    //   error: 'Internal Server Error',
    //   message: "Cannot read property 'toJSON' of null",
    // };
  }
};

export const getSingleProduct = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
    const id: string = req.params.id;
    console.log(id);

    const product = await Product.findById(id);
    return product;
  } catch (err) {
    throw err;
  }
};

export const addProduct = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
    const product = new Product(req.body);
    return await product.save();
  } catch (err) {
    throw err;
  }
};

export const updateProduct = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
    const id = req.params.id;
    const product = req.body;
    const { ...updateData } = product;
    const update = await Product.findByIdAndUpdate(id, updateData);
    return update;
  } catch (err) {
    throw err;
  }
};

export const deleteProduct = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndRemove(_id);
    return product;
  } catch (err) {
    throw err;
  }
};
