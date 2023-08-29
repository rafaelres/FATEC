import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.listen(PORT, function(){console.log(`Rodando ${PORT}`)})

app.get("/somar/:w/:z", function(req,res){
    const {w,z} = req.params
    let r = parseFloat(w) + parseFloat(z)
    res.send({r})
})

app.get("/teste", function(req,res){
    res.send("boa tarde")
})