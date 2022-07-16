const mongoose = require("mongoose")
const UserSubmitSchema = mongoose.Schema({
    id: {
        type: String,
    },
    code: {
        type: Number,
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
const UseSubmitModel = mongoose.models.UseSubmitModel || mongoose.model("UseSubmitModel", UserSubmitSchema);
module.exports = UseSubmitModel;