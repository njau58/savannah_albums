import mongoose, { ConnectOptions } from "mongoose"

const connectDb = async (): Promise<void> => {
	try {
		const connectionString: string = process.env.MONGO_URI??""
		await mongoose.connect(connectionString, {
			
			useUnifiedTopology: true,
		} as ConnectOptions)

		console.log("MongoDB connected successfully")
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error connecting to MongoDB:", error.message)
		} else {
			console.error("Unknown error occurred while connecting to MongoDB")
		}
	}

}

export default connectDb
