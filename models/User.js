import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      enum: ["admin", "user"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || model("User", UserSchema);
export default User;
