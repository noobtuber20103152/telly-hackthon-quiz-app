
const connectToMongo = require('../connect/connect');
connectToMongo();
const UserSubmitModel = require("../model/UserSubmitModel")
export default async function quiz(req, res) {
    if (req.method === "POST") {
        const userSubmitData = req.body;
        console.log(userSubmitData);
        const newData = new UserSubmitModel(
            userSubmitData
        )
        newData.save();
        res.json({ status: 200, quizdata: userSubmitData })
    }
}
