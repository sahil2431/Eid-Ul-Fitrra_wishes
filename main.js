
const express = require('express')
const app = express() 
const mongoose = require('mongoose');
const path = require('path');
const quotes = require("./models/quotes")
const db = "mongodb+srv://user4526:8XePBzKJFRNbsPMA@project.gmdhkrn.mongodb.net/myProjec?retryWrites=true&w=majority&appName=Project"
conn = mongoose.connect(db).then(()=>{
  console.log("Connection Successfull")
}).catch((err)=>{
  console.log("no Connnection" , err)
});
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
});

app.get('/getQuotes', async (req, res) => {
  const count = await quotes.countDocuments();
  const random = Math.floor(Math.random() * count);
  const quote = await quotes.findOne().skip(random);
  res.json(quote.message);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})