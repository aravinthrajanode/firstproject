const express = require('express');
const hbs = require('hbs')
const app = express()
const path = require('path');
const port  = process.env.POTR || 3000 
const dir = path.join(__dirname,'../public')
const dirs = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partial')
app.use(express.static(dir))
app.set('view engine','hbs')
//app.set('view',dirs)
hbs.registerPartials(partialPath)




app.get('',(req, res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Aravinthraja'
    })
})
app.get('/help',(req, res)=>{
    res.send("helooo help")
})

app.listen(port, ()=>{
    console.log('server is up')
})