const mongoose = require("mongoose")
const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })
const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
module.exports = Admin;