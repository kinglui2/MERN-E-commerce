import User from "../models/user.js";

export default async function RegisterUser(req, res){
   try{
   const {email, password, username} = req.body;
   
   const userExists = await User.findOne({ email });
   if (userExists) return res.status(409).json({ message: 'User already exists' });
   const user = await User.create({
      username,
      email,
      password,
    });
    console.log(user)
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
   }
   catch(e){
      res.status(500).json({error: "An error occured. Try again"})
   }
}