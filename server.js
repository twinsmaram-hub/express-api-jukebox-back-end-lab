//dotenv
const dotenv=require('dotenv')
dotenv.config();
//mangoose
const mongoose=require('mongoose')
mongoose.connect(process.env.MANGODB_URI)


mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
//express
const express=require('express')
const app = express()
//controller
const morgan=require('morgan')
const petCtrl= require('./controllers/tracks')

//middleware

app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/tracks',petCtrl)

app.listen(3000,()=>{
    console.log('the eepress is ready ')
})