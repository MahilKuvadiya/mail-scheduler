import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    price : {
        type : Number,
        require : true
    },
    description : {
        type : String,
        require : false
    },
    stock : {
        type : Number,
        require : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});

const productModal = mongoose.model('product', productSchema);

export const getProductById = ( id : string ) => productModal.findById(id);
export const getAllProducts = () => productModal.find()

export const createProduct = ( product : Record<string,any>) => new productModal(product).save().then((product)=>{
    return product.toObject();
})

export const updateProductById = (id : string, values : Record<string,any>) => productModal.findByIdAndUpdate(id,values);

export const deleteProductById = (id : string) => productModal.findByIdAndDelete(id);