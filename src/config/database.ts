import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log("connected to mongodb")
    } catch (error:any) {
        console.error("Error connecting to MongoDB: ", error.message);
    }
};