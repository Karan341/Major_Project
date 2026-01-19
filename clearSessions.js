if (process.env.NODE_ENV != "production") {
     require("dotenv").config();
}

const mongoose = require("mongoose");

const dbUrl = process.env.ATLASDB_URL;

async function clearSessions() {
     await mongoose.connect(dbUrl);
     console.log("Connected to MongoDB");

     // Drop the sessions collection
     await mongoose.connection.db.dropCollection('sessions');
     console.log("Sessions collection dropped");

     await mongoose.disconnect();
     console.log("Disconnected from MongoDB");
}

clearSessions().catch(console.error);