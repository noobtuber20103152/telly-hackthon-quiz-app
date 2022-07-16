const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    }
}, { timestamps: true })
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
module.exports = Contact;