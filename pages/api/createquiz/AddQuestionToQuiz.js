
const connectToMongo = require('../connect/connect');
connectToMongo();
const QuestionModel = require("../model/QuestionModel")
const CreateQuiz = require("../model/CreateQuiz")
export default async function quiz(req, res) {
    if (req.method === "POST") {
        let token = req.headers["token"];
        const questionData = req.body;
        console.log(questionData);
        console.log(token);
        let QuizData = await CreateQuiz.find({ _id: token })
        let arr = QuizData[0].questions;
        arr.push(questionData)
        // console.log(arr);
        let responseQuizData = await CreateQuiz.updateOne({ _id: token }, { $set: { questions: arr } })
        // let res = await CreateQuiz.insert()
        res.json({ status: 200 })
    }
}
