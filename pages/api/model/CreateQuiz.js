const mongoose = require("mongoose")
const CreateQuizSchema = mongoose.Schema({
    id: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
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
const CreateQuiz = mongoose.models.CreateQuiz || mongoose.model("CreateQuiz", CreateQuizSchema);
module.exports = CreateQuiz;