import { Mongoose } from "mongoose";

const videoSchema = new Mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashTag: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});
