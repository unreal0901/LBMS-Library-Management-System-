const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./config/db");
// highlights certain lines in terminal just to direct attention to towards them
const colors = require("colors");
const multer = require("multer");
// configured .env file
dotenv.config();
//connected to database by callling db()
db();
const cors = require("cors");
// admin routes called
const adminRoutes = require("./routes/adminRoutes");
const PORT = process.env.PORT || 4000;
app.use(express.json()); //parsing json data on post

app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`SERVER listening on PORT:${PORT}`);
});
