const express = require('express')
const cors = require("cors")
const ejs = require ("ejs")
const path = require('path')
const app = express()


// app.use(express.static('public'))
// app.use('/css',express.static(__dirname+ "public/css"))
// app.use('/api_test',express.static(__dirname +"public/api_test"))

// app.set('views','./views')
// app.set('view engine','ejs')

// const directorPath = path.join(__dirname,'./public')
// app.use(express.static(directorPath))
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000

require('./db/db')


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/get_data',(req,res)=>{
    res.render('get_data')
})

app.get('/post_data',(req,res)=>{
    res.render('post_data')

})



//Hosptial A
const router = require('./Hosptial A/routes/Doner.route')
app.use(router)

const patiantA = require('./Hosptial A/routes/patiant.route')
app.use(patiantA)

//Hosptial B

const DonerB = require('./Hosptial B/routes/Doner.routeHosptialB')
app.use(DonerB)

const patiantB = require('./Hosptial B/routes/patiant.routeHosptialB')
app.use(patiantB)

//Hosptial C

const DonerC = require('./Hosptial C/routes/Doner.routeHosptialC')
app.use(DonerC)

const patiantC = require('./Hosptial C/routes/patiant.routeHosptialC')
app.use(patiantC)



app.listen(port,()=>{console.log('sucss to save')})