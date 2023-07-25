import mongoose from "mongoose";

export class DataBase {
    static async connectDB() {
        const DB_URl = 'mongodb+srv://ngphong0708:5k3Ryjs04f9vJMPn@cluster0.px6ohyz.mongodb.net/test';
        return await mongoose.connect(DB_URl);
    }
}