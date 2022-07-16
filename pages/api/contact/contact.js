
const connectToMongo = require('../connect/connect');
connectToMongo();
const Contact = require("../model/Contact")
export default async function quiz(req, res) {
    if (req.method === "POST") {
        const saveQuiz = new Contact(
            req.body
        )
        let resdata = await saveQuiz.save();
        res.json({ status: 200, quizdata: resdata })
    }
}
