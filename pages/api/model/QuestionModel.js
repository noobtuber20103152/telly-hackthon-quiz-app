const mongoose = require("mongoose")
const QuestionSchema = mongoose.Schema({
    multiCorrect: {
        type: Boolean,
    },
    questionStatement: {
        type: String,
    },
    options: {
        type: Array
    },
    score: {
        type: String
    },
    correct: {
        type: String
    }

}, { timestamps: true })
const QuestionModel = mongoose.models.QuestionModel || mongoose.model("QuestionModel", QuestionSchema);
module.exports = QuestionModel;