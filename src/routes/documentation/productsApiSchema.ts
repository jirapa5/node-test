export const GetProductSchema = {
	description: 'Get single product',
	tags: ['products'],
	summary: 'Get product by id',
	params: {
		type: 'object',
		// required: ['id'],
		properties: {
		  id: {
			type: 'string',
		  },
		},
	  },
	response: {
		200: {
			description: 'Success response',
			type: 'object',
			properties: {
				_id: {type: 'string'}, 
				code: { type: 'string' },
				name: { type: 'string' },
				img: { type: 'string' },
				price: { type: 'number' },
				stock: { type: 'number' },
				description: {type: 'string'},
			},
		},
	},
};

export const GetProductsSchema = {
	description: 'Get all products',
	tags: ['products'],
	summary: 'Get all products',
	response: {
		200: {
			description: 'Success response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: {type: 'string'}, 
					code: { type: 'string' },
					name: { type: 'string' },
					img: { type: 'string' },
					price: { type: 'number' },
					stock: { type: 'number' },
					description: {type: 'string'},
				},
			}
		},
	},
};

export const AddProductSchema = {
	description: 'Create new product',
	tags: ['products'],
	summary: 'Create new product ',
	body: {
		type: 'object',
		properties: {
			_id: { type: 'string' },
			code: { type: 'string' },
			name: { type: 'string' },
			img: { type: 'string' },
			price: { type: 'number' },
			cost: { type: 'number' },
			stock: { type: 'number' },
            description: {type: 'string'},
		},
	},
	response: {
		200: {
			description: 'Success response',
			type: 'object',
			properties: {
				_id: {type: 'string'}, 
				code: { type: 'string' },
				name: { type: 'string' },
				img: { type: 'string' },
				price: { type: 'number' },
				cost: { type: 'number' },
				stock: { type: 'number' },
                description: {type: 'string'},
			},
		},
	},
};

export const PutProductSchema = {
	description: 'Updates existing product',
	tags: ['products'],
	summary: 'Update product by Id with given values',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
			  },
		}
	},
	body: {
		type: 'object',
		properties: {
			name: { type: 'string' },
			img: { type: 'string' },
			price: { type: 'number' },
			cost: { type: 'number' },
			stock: { type: 'number' },
            description: {type: 'string'},

		},
	},
	response: {
		200: {
			description: 'Success response',
			type: 'object',
			properties: {
				_id: {type: 'string'}, 
				code: { type: 'string' },
				name: { type: 'string' },
				img: { type: 'string' },
				price: { type: 'number' },
				cost: { type: 'number' },
				stock: { type: 'number' },
				description: {type: 'string'},
			},
		},
	},
};

export const DeleteProductSchema = {
	description: 'Deletes one product',
	tags: ['products'],
	summary: 'Delete product by id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'Product id',
			},
		},
	},
	response: {
		200: {
			description: 'Success response',
			type: 'object',
			properties: {
				_id: {type: 'string'}, 
				code: { type: 'string' },
				name: { type: 'string' },
			},
		},
	},
};