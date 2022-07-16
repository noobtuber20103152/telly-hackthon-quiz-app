
const mongoose = require('mongoose');
const connection = {};
const uri = "mongodb+srv://noobtuber:noobtuber@cluster0.blsj1wx.mongodb.net/?retryWrites=true&w=majority"
async function connectToMongo() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

module.exports = connectToMongo;
