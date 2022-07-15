
const connectToMongo = require('../connect/connect');
connectToMongo();
const CreateQuiz = require("../model/CreateQuiz")
export default async function quiz(req, res) {
    if (req.method === "POST") {
        const saveQuiz = new CreateQuiz(
            req.body
        )
        let resdata = await saveQuiz.save();
        res.json(resdata)
    }
}
