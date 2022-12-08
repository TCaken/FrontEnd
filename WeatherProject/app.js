const express = require('express')
const app = express()
const http = require("https")
const bodyParser = require("body-parser")

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

//Request body followed naming convention from input name instead of input id
app.post("/", urlencodedParser, function(req, res){
    const query = req.body.cityName
    const apiKey = "0ee1f36bdd08e7a5e594dfb83787367e"
    const metric = "metric"
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid='+ apiKey +'&units=' + metric +'&q=' + query
    http.get(url, function(response){
        console.log(response.statusCode)
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            //console.log(weatherData)
            //console.log(iconUrl)
            res.write("<p>The weather is currently "+ description +"</p>")
            res.write("<h1>The temperature in "+ query +" is " + temp + "<sup>o</sup>C</h1>")
            res.write("<img src="+ iconUrl +">")
            res.send()
        })
    })
    // JSON stringify turns a javascript Object into strnig with no empty spaces
    // JSON.stringify(data)
})

app.listen(3000, function(){
    console.log("Server has started on port 3000")
})