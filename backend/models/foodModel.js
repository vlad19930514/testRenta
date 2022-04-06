import mongoose from 'mongoose'

const foodSchema = mongoose.Schema({
    foodName:String,
    products:[{
        name:{
            type: String,
        },
        price:{
                 type: Number,
             },
        about:{
                type: String,
            },
        img:{
                type: String,
            },
        delivery:{
            type: Boolean,
        },
    }]

})

const foodModel = mongoose.model('Food',foodSchema)
export default foodModel