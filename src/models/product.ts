import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	_id: String,
	code: String,
	name: String,
	price: Number,
    img: String,
    cost: Number,
	stock: Number,
	description: String
	
});

export default mongoose.model('Product', productSchema);