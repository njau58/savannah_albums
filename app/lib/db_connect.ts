import mongoose, { ConnectOptions } from "mongoose";


let cachedConnection: typeof mongoose | null = null;

const connectDb = async (): Promise<void> => {
  try {
    if (cachedConnection) {
      console.log("Using cached MongoDB connection");
      return;
    }

    const connectionString: string = process.env.MONGO_URI ?? "";
    cachedConnection = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      socketTimeoutMS: 30000,
    } as ConnectOptions);

    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB:", error.message);
    } else {
      console.error("Unknown error occurred while connecting to MongoDB");
    }
  
    cachedConnection = null;
    throw error;
  }
};

export default connectDb;