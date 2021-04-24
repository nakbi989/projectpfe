import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    /* email, phone , titre , Gouvernorat , vile , intervaleage ,  description ,checked , selectedFile ,*/
    email: [String],

    tel: [String],
    Titre:[String],
    Gouvernorat :[String], /* gouvernorat*/
    vile :[String],
    intervaleage : [String],
    categorie: [String],
    description: [String],
    categorie:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    Commanter: {
        type:String,
        default:'',
    }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;