import mongoose, { Schema, model } from "mongoose";

const OrdersShema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  customer: {
    type: String,
    required: true,
  },

  products: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.models?.Orders || model("Orders", OrdersShema);
export default Order;
