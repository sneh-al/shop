import mongoose, { Schema, model } from "mongoose";

const OrdersShema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  customerName: { type: String, required: true },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.models?.Orders || model("Orders", OrdersShema);
export default Order;
