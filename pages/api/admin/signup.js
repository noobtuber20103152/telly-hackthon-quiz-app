
const connectToMongo = require('../connect/connect');
connectToMongo();
const Admin = require("../model/Admin")
const bcrypt = require("bcrypt")
export default async function signup(req, res) {
    if (req.method === "POST") {
        try {
            const AdminData = req.body;
            console.log(AdminData);
            if (AdminData == undefined) {
                res.json({ status: 400 });
            }
            const takenAdminEmail = await Admin.findOne({ email: AdminData.email });
            if (takenAdminEmail) {
                res.json({ status: 409, message: "Email already used." });
            }
            else {
                AdminData.password = await bcrypt.hash(AdminData.password, 10);
                const SavedAdminData = new Admin({
                    name: AdminData.name,
                    email: AdminData.email,
                    phone: AdminData.phone,
                    password: AdminData.password,

                })
                SavedAdminData.save();
                res.json({ status: 200, DriverInfo: { SavedAdminData } })
            }

        } catch (error) {
            res.json({ status: 400, error: error.message })
        }
    }
}
