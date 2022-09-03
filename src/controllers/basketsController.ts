import Basket from '../models/basket';
import { Document } from 'mongoose';
import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';


export const getBasket = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		const id = req.params.id;
        const basket = await Basket.find({cartId: id}) 
		return basket;
	} catch (err) {
		throw(err);
	}
};

// create new basket
export const addBasket = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    	try {
    		const basket = new Basket(req.body);
    		return await basket.save();
    	} catch (err) {
    		throw(err);
    	}
    };

// add new product to exist basket
export const addProductToBasket = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
        const id = req.params.id;
		
		return await Basket.findOneAndUpdate(
            {
                cartId: id,
            },
            {
                $set:{
                    code: req.body.products[0].code, price: req.body.products[0].price, quantity: req.body.products[0].quantity
                }
            });
     

	} catch (err) {
		throw(err);
	}
};

