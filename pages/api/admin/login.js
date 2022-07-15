
const Admin = require("../model/Admin")
const connectToMongo = require('../connect/connect');
connectToMongo();
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'InfiCoders';
export default async function login(req, res) {
    if (req.method === "POST") {
        try {
            const AdminData = req.body;
            console.log(req.body)
            Admin.findOne({ email: AdminData.email })
                .then(dbAdmin => {
                    if (!dbAdmin) {
                        return res.json({
                            status: 401
                        })
                    }
                    bcrypt.compare(AdminData.password, dbAdmin.password)
                        .then(isCorrect => {
                            if (isCorrect) {
                                const payload = {
                                    id: dbAdmin._id,
                                    name: dbAdmin.name,
                                }
                                jwt.sign(
                                    payload,
                                    JWT_SECRET,
                                    { expiresIn: 86400 },
                                    (err, token) => {
                                        if (err) return res.json({ err: "Internal server error" })
                                        return res.json({
                                            status: 200,
                                            token: token
                                        })
                                    }
                                )
                            }
                            else {
                                return res.json({ status: 401, err: "Invalid Credentials" })
                            }
                        })
                })
        } catch (err) {
            res.json({ status: 400, error: err.message })

        }
    }
}