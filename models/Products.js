import mongoose, { Schema, model } from "mongoose";

// Define the Product schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  images: {
    type: [String], // Array of strings for image URLs
    required: true,
  },
});

// Create the Product model
const Product = mongoose.models?.Product || model("Product", ProductSchema);

export default Product;
