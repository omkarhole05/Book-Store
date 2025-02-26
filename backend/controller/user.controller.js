import user from "../model/user.model.js";

export const signup  = async (req,res)=>{

    try {
        const {name,email,password}=req.body;
        const User = await user.findOne({email});
        if(User){
            res.status(400).json({message:"user already exist, plz login"});
        }
        else{
        const createUser= new user({
            name,
            email,
            password,
        })

        await createUser.save();
        res.status(201).json({message:"user created successfully",user:{
            _id:createUser.id,
            name:createUser.name,
            email:createUser.email,
        }});
    }
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const User = await user.findOne({email});
    
        if(!User || (password !== User.password)){
            return res.status(400).json({message:"invalid email & password"});
        }
        else{
            res.status(200).json({message:"login successfully",user:{
                name:User.name,
                email:User.email,
            }});
        }

    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}