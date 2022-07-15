
const connectToMongo = require('../connect/connect');
connectToMongo();
const CreateQuiz = require("../model/CreateQuiz")
export default async function getquizData(req, res) {
    if (req.method === "DELETE") {
        let token = req.headers["token"]
        const saveQuiz = await CreateQuiz.deleteOne({ _id: token })
        console.log(saveQuiz)
        res.json({ status: 200 })
    }
}
