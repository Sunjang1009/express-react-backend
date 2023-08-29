require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const peopleRouter = require("./controllers/people");


// import middleware
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
// parse means: 
app.use(express.json());

app.use("/people", peopleRouter)

app.get("/", (req,res)=>{
    res.send("hello world");
})

app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));

