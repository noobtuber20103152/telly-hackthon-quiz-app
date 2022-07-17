const mongoose = require("mongoose")
const UserSubmitSchema = mongoose.Schema({
    id: {
        type: String,
    },
    code: {
        type: Number,
    },
    username: {
        type: String
    },
    duration: {
        type: Number,
    },
    totalQuestion: {
        type: Number,
    },
    totalScore: {
        type: Number,
    },
    name: {
        type: String
    },
    questions: {
        type: Array
    }

}, { timestamps: true })
const UserSubmitModel = mongoose.models.UseSubmitModel || mongoose.model("UserSubmitModel", UserSubmitSchema);
module.exports = UserSubmitModel;