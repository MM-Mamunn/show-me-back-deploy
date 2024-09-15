import { Signup } from '../models/SignUp.js';

const signupNew = async (req, res) => {
  try {
    const signNew = await Signup.create(req.body);
    res.status(200).json(signNew);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const userCheck = async (req, res) => {
  try {
    const { userName } = req.body;
    console.log("hi");
    
    console.log(req);
    
    console.log(userName);
    
    const ck = await Signup.find({userName});
    if(ck.length > 0) 
    res.status(200).json({"message":1});
  else
  res.status(200).json({"message":0});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const login = async (req, res) => {
    try {
        const { userName,password } = req.body;
        const lgin = await Signup.findOne({userName,password});
        console.log(lgin);
        
        if(lgin)
          res.status(200).json({"message":1});
        else 
        res.status(200).json({"message":0});

      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
const signAll = async (req, res) => {
  try {
    const all = await Signup.find({}).sort({ updatedAt: -1 });
    res.status(200).json(all);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { signupNew,login,userCheck ,signAll};