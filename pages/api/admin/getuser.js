
const connectToMongo = require('../connect/connect');
const Admin = require("../model/Admin")
connectToMongo();
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'InfiCoders';
export default async function getuser(req, res) {
    if (req.method == "GET") {
        const token = req.headers['token'];
        try {
            if (token) {
                jwt.verify(token, JWT_SECRET, async (err, decoded) => {
                    if (err) return res.json({ isLoggedIn: false, message: "Authentication failed" });
                    let AdminData = await Admin.findOne({ _id: decoded.id });
                    return res.json({ isLoggedIn: true, message: "Authentication successfully", AdminData: AdminData });
                })
            }
            else {
                return res.json({ isLoggedIn: false, message: "Authentication failed" });
            }
        } catch (error) {
            res.json({ isLoggedIn: false, message: "Internal server error", error: error.message });
        }
    }
    else {
        res.json({ err: "Some error occured" })
    }
}