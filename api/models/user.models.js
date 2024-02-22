import mongoose from 'mongoose'


const userSchema =new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,

    },

    email:{
        type:String,
        required: true,

    },
}, {timestamps: true}//saves time of creation and time of update


);

const User = mongoose.model('User',userSchema);

export default User;

