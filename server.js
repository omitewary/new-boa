const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

//connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Define routes
app.use("/api/securities", require("./routes/api/securities.route"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
