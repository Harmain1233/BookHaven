const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user")
const books = require("./routes/book");
const favorite = require("./routes/favorite");
const cart = require("./routes/cart");
const Order = require("./routes/order");

app.use(cors());
app.use(express.json());

//routes 
app.use("/api/v1", user);
app.use("/api/v1", books);
app.use("/api/v1", favorite);
app.use("/api/v1", cart);
app.use("/api/v1", Order);



// Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});
