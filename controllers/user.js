
export const login=(req,res)=>{
    try {
        const {email,password} = req.body;
        res.json({
            success:true,
            email,
            password
        })    
    } 
    catch (error) {
       res.json({
        success:false,
       })
    }
}