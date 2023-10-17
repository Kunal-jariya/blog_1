require("mongoose").connect("mongodb+srv://kunal-jariya:0lknPJN03WrvWxNZ@cluster0.8adsbgx.mongodb.net/?retryWrites=true&w=majority").then(()=>{
console.log("DATABASE CONNECTED")
}).catch((err)=>{
    console.log("ERRRRRRRR----->", err)
})
