
const connectToMongo = require('../connect/connect');
connectToMongo();
const UserSubmitModel = require("../model/UserSubmitModel")
export default async function quiz(req, res) {
    if (req.method === "GET") {
        let token = req.headers["token"];
        let submitQuizData = await UserSubmitModel.find({ id: token })
        res.json({ status: 200, submitQuizData: submitQuizData })
    }
}
