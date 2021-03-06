import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
let CategorySchema = new mongoose.Schema({
    name: String,
},{ bufferCommands: false , timestamps:true});

CategorySchema.plugin(mongoosePaginate);

export {CategorySchema};