const express = require('express')
const bodyParser = require('body-parser')
const getWeather = require('./requests/weather.request')


const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',async  (req,res) => {
    res.render('index')
})

app.post('/',async (req,res)=>{
    const {city} = req.body

    const {weather,error} = await getWeather(city)
    res.render('index',{weather,error})
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})