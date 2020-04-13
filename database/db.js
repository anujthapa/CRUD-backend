const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL.replace("<password>", process.env.DB_PASS);

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
    process.exit(1); //exit process with failure
  }
};

module.exports = connectDB;
