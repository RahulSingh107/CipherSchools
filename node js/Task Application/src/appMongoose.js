const { connect } = require('mongoose');
const MONGO_URL = "mongodb+srv://rahul:rahul107@cluster0.mao2iq0.mongodb.net";
const DB_NAME = `rahul`;
console.log("Connecting to MongoDB");
async function connectDb() {
    try {
        await connect(`${MONGO_URL}/${DB_NAME}`)
        console.log("connected");
    }
    catch (err) {
        console.error(err);
    }
}
connectDb();