const express=require('express')
const router=express.Router()
const {getLanguages} =require('../controllers/user')

router.get('/langs',getLanguages)




module.exports=router          