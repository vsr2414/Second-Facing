import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://VisithaVR:10a20b30c@cluster0.dh3larw.mongodb.net/food-del') .then (() => console.log("DB connected"));
}