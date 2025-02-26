import contact from "../model/contact.model.js";

export const contactUser = async (req,res)=>{
    try {
        const {name,email,message}=req.body;

        const createContact=new contact({
            name,
            email,
            message
        }) 
        await createContact.save();
        res.status(201).json({message:"message sent successfully"});
    }
    catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

// ,user:{
//     _id:createContact.id,
//     name:createContact.name,
//     email:createContact.email,
//     message:createContact.message
// }