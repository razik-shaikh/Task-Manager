import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (err) {
        console.log("MongoDB Error:", err)
        // process.exit(0)	//Program success ke saath exit
        process.exit(1)	//Program error ke saath exit
    }
}

export default connectDB;