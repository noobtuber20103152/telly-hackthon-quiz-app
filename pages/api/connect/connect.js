
const mongoose = require('mongoose');
const connection = {};
const uri = "mongodb://localhost:27017/quizApp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
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
