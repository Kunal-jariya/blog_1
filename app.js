const express = require("express");
const app = express();
const cors = require("cors")
const AllRoutes = require("./config/AllRoutes");
const Upload = require("express-fileupload");

const root = require("path").join(__dirname, "build");

app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname+"/assets"));

app.use(express.json());

app.use(express.static(root));

app.use(cors());
app.use(Upload());
app.use(AllRoutes);

app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server is running with port-", port);
})



// kunal-jariya
// 0lknPJN03WrvWxNZ