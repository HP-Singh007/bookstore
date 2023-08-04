import express from "express"

const router=express.Router();

router.get('/me',(req,res)=>{
    res.json({
        success:true,
        message:"Just checking",
    })
})

export default router;