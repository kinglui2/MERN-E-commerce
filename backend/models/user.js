import  mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema( {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  });
  
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user', 
  },
  addresses: { type: [AddressSchema], default: [] },
 
  firstName:  {
    type: String,
    required: false,
    minlength: 2,
    default: null
  },
  lastName: {
    type: String,
    required: false,
    minlength: 2,
    default: null
  },
}, { 
    timestamps: true,
    versionKey: false
 });



const User = mongoose.model('User', UserSchema);

export default User;
