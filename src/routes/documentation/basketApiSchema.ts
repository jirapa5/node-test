export const GetBasketSchema = {
	description: 'Get basket ',
	tags: ['baskets'],
	summary: 'Get basket',
	params: {
		type: 'object',
		properties: {
			id: { type: 'string' ,

			 },
		},
	},
	response: {
		200: {
			description: 'Success response',
			type: 'array',
			items: {
		 		type: "object",
			properties: {
				_id: { type: 'string' },
					cartId: { type: 'string' },
					productCode: { type: 'string' },
					name: {  type: 'string'},
					price: {type: 'number'},
					quantity: {type: 'number'}
				},

			},	
		},
	},
};

export const AddBasketSchema = {
	description: 'Add product to Basket',
	tags: ['baskets'],
	summary: 'Add product to Basket',
	body: {
		type: 'object',
		properties: {
			_id: { type: 'string' },
            cartId: { type: 'string' },
            productCode: { type: 'string' },
            name: {  type: 'string'},
            price: {type: 'number'},
            quantity: {type: 'number'}

		},
	},
	response: {
		200: {
			description: 'Success response',
			type: 'object',
			properties: {
				_id: { type: 'string'} ,
                cartId: { type: 'string' },
                productCode: { type: 'string' },
                name: {  type: 'string'},
                price: {type: 'number'},
                quantity: {type: 'number'}
			},	
		},
	},
};

