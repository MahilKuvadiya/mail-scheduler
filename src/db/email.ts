import mongoose from 'mongoose'

const emailSchema = new mongoose.Schema({
    senderEmail : { 
        type : String,
        require: true
    },
    receiverEmail : { 
        type : String,
        require: true
    },
    subject : { 
        type : String,
        require: true
    },
    text : { 
        type : String,
        require: true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    recurrence : {
        type : Object,
        require : false
    },
    attechments : {
        type : Array,
        require : false
    },
    sended : {
        type : Boolean,
        default : false
    }
});

//make a dummy object

const data = {
    senderEmail : "",
    receiverEmail : "",
    subject : "",
    text : "",
    createdAt : new Date(),
    schedualedTime : new Date(),
    attechments : [] as string[],
}

// const productModal = mongoose.model('product', productSchema);
const emailModal = mongoose.model('email', emailSchema);

// export const getProductById = ( id : string ) => productModal.findById(id);
// export const getAllProducts = () => productModal.find()

// export const createProduct = ( product : Record<string,any>) => new productModal(product).save().then((product)=>{
//     return product.toObject();
// })

// export const updateProductById = (id : string, values : Record<string,any>) => productModal.findByIdAndUpdate(id,values);

// export const deleteProductById = (id : string) => productModal.findByIdAndDelete(id);

export const getEmailBySenderEmail = ( senderEmail : string ) => emailModal.find({
    senderEmail : senderEmail
});

export const getEmailByReceiverEmail = ( receiverEmail : string ) => emailModal.find({
    receiverEmail : receiverEmail
});

export const getEmailById = ( id : string ) => emailModal.findById(id);

export const getAllEmails = () => emailModal.find()

export const createEmail = ( email : Record<string,any>) => new emailModal(email).save().then((email)=>{
    return email.toObject();
})

export const updateEmailById = (id : string, values : Record<string,any>) => emailModal.findByIdAndUpdate(id,values);

export const deleteEmailById = (id : string) => emailModal.findByIdAndDelete(id);

export const getAllUnsendedEmails = ( senderEmail : string ) => emailModal.find({
    senderEmail : senderEmail,
    sended : false
});