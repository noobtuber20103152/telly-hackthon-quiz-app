
const connectToMongo = require('../connect/connect');
connectToMongo();
const CreateQuiz = require("../model/CreateQuiz")
export default async function getsinglequizdata(req, res) {
    if (req.method === "GET") {
        let token = req.headers["token"]
        const saveQuiz = await CreateQuiz.find({ _id: token })
        if (saveQuiz) res.json(saveQuiz)
        else res.json({ DataMessage: "No Data found" })
    }
}
