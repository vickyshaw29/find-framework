require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const userRoutes=require('./routes/user')

// app
const app=express()
// middleware
app.use(bodyParser.json())
app.use(cors({origin:process.env.CLIENT_URL}))
app.use(morgan('dev'))

app.use('/api',userRoutes)
app.use(function(err,req,res,next){
    if(err.name=='UnauthorizedError'||'Unauthorized'){
        res.status(401).json({err:'User not authorized'})
    }
})

// connecting db
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('db connected'))
.catch(err=>console.log(err))
app.listen(process.env.PORT,()=>console.log('running on port 8000'))