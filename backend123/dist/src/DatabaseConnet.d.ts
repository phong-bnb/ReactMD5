import mongoose from "mongoose";
export declare class DataBase {
    static connectDB(): Promise<typeof mongoose>;
}
