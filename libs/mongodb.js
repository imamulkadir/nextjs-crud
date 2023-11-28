import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
