const express=require('express')
const mongoose=require('mongoose')
const User=require('./models/user')
const lang=require('./data/langData')

require('dotenv').config()
const app=express()
const importData=async()=>{
   try {
    await User.deleteMany()
//    const createdBanks= await Banks.insertMany(bank)
//    const adminUser=createdUsers[0]._id
   const samplelang=lang.map(product=>{
       return {...product}
   })
   await User.insertMany(samplelang)
   console.log('data imported')
   process.exit()
   } catch (error) {
       console.log(error)
   }
}
const destroyData=async()=>{
    try {
     await User.deleteMany()
    //  await Product.deleteMany()
    //  await User.deleteMany()
    console.log('data destroyed')
    process.exit()
    } catch (error) {
        console.log(error)
    }
 }
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT),()=>console.log('running on port 8000'))
.catch(err=>console.log(err))
if(process.argv[2]==='-d'){
    destroyData()
}
importData()