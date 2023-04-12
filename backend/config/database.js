const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then((data)=> {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    // Not writing catch here to make it Unhandles Promise Rejection (Promise is resolved in then block and rejected in catch but we are making rejecting unhandled)
}

module.exports = connectDatabase;