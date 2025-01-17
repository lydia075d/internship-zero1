import mongoose from "mongoose";
const likeSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true },
    blogId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true },
    dateOfLike: {
         type: Date,
        default: Date.now }
  });
  const Like = mongoose.model('Like', likeSchema);
  export default Like;