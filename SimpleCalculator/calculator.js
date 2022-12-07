const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true})) //text, json. Extended ensure for nested items 

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/calculator", function(req, res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2

    res.send("The answer of submission is " + result)
})

app.post("/bmiCalculator", function(req, res){
    var height = parseFloat(req.body.height)
    var weight = parseFloat(req.body.weight)

    var result = weight / height / height

    res.send("Your BMI is " + result.toFixed(2) + " kg/m<sup>2</sup>")
})

app.listen(3000, function(){
    console.log("Server starting at port 3000")
})