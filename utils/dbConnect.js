import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'MERN_Blog'
        });
        return response;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
