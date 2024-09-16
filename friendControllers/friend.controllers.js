import { Friend } from '../models/friend.js';
import { Messages } from '../models/Messages.js';

const frndNew = async (req, res) => {
  try {
    console.log(req.body);
    
    const frndNw = await Friend.create(req.body);
    let t = req.body.userName1;
    req.body.userName1 = req.body.userName2;
    req.body.userName2 = t;  
    
    // const frndNw2 = await Friend.create(req.body);
    res.status(200).json({message:"success"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const friends = async (req, res) => {
  try {
    const { user } = req.params;
    console.log(user);
    
    const fromm = await Friend.find({
      $or: [{ userName1: user }, { userName2: user }]
  });
  for (let i = 0; i < fromm.length; i++) {
    if(fromm[i].userName1 != user){
      const temp = fromm[i].userName1; // Temporarily store userName1
      fromm[i].userName1 = fromm[i].userName2; // Assign userName2 to userName1
      fromm[i].userName2 = temp; // Assign the temporary value (original userName1) to userName2
    } 
  }
  for(let i = 0; i < fromm.length; i++) {
    const t = await Messages.findOne({from: fromm[i].userName2 ,to:user, seen: false });
    let temp = { ...fromm[i], "count": t ? true : false };
   fromm[i] = temp;
  }
  console.log(fromm);
  
    res.status(200).json(fromm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const frndCheck = async (req, res) => {
  try {
    const { userName1,userName2 } = req.body;  
    const ck = await Friend.find({userName1,userName2});
    const ck2 = await Friend.find({userName2:userName1,userName1:userName2});
    if(ck.length > 0 || ck2.length > 0) 
    res.status(200).json({"message":1});
  else
  res.status(200).json({"message":0});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export {frndNew,friends,frndCheck};

