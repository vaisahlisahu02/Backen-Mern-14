const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/miniproject")
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
