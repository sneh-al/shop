"use server";
import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import Order from "@/models/Orders";
import Product from "@/models/Products";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const register = async (values) => {
  const { email, password, name, address, type } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      address,
      type,
    });
    const savedUser = await user.save();
  } catch (e) {
    console.log(e);
  }
};

export const getUserByEmail = async (email) => {
  try {
    await connectDB();
    const user = await User.findOne({ email }).select("-password");
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (values) => {
  var query = { email: values.email };
  const { email, name, address } = values;

  try {
    await connectDB();
    const user = await User.findOne({ email }).select("-password");

    user.name = name;
    user.email = email;
    user.address = address;
    user.save();
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const getUserOrders = async (email) => {
  var query = { customer: email };

  try {
    await connectDB();
    const orders = await Order.find(query);
    return JSON.parse(JSON.stringify(orders));
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = async (values) => {
  try {
    await connectDB();
    const product = new Product(values);
    await product.save();
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const deleteProduct = async (id) => {
  try {
    await connectDB();
    const product = await Product.findByIdAndDelete(id);
    return null;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const deleteUser = async (email) => {
  try {
    await connectDB();
    const user = await User.findOneAndDelete({ email });
    return null;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const makeOrder = async (values) => {
  try {
    await connectDB();
    const order = new Order(values);
    await order.save();
    return JSON.parse(JSON.stringify(order));
  } catch (error) {
    console.log(error);
  }
};

export const saveCart = async (data) => {
  try {
    await connectDB();
    const cart = new Cart(data);
    await cart.save();
    return JSON.parse(JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
};
