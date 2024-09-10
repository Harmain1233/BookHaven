const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user")
const books = require("./routes/book");
app.use(express.json());

//routes 
app.use("/api/v1", user);
app.use("/api/v1", books);

// Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});
