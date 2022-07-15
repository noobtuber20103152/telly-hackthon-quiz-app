const mongoose = require("mongoose")
const CreateQuizSchema = mongoose.Schema({
    id: {
        type: String,
    },
    totalQuestion: {
        type: Number,
    },
    totalScore: {
        type: Number,
    },
    name:{
        type: String
    },
    questions: [
        {
            multiCorrect: {
                type: Boolean,
            },
            qeustionStatement: {
                type: String,
            },
            options: [
                {
                    type: String,
                }
            ],
            score: {
                type: Number,
            },
            correct: [
                {
                    type: String,
                }
            ]
        }
    ]

}, { timestamps: true })
const CreateQuiz = mongoose.models.CreateQuiz || mongoose.model("CreateQuiz", CreateQuizSchema);
module.exports = CreateQuiz;