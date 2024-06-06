import mongoose from "mongoose";
const Data = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    }
})
export const data = new mongoose.model("task", Data);