import mongoose from 'mongoose';  

const basketSchema = new mongoose.Schema({
    _id: String,
    cartId: String,
    productCode: String,
    name: String,
    quantity: Number,
    price: Number,
    createdAt: Date,
    updatedAt: Date,
   
});

export default mongoose.model('Basket', basketSchema);
    