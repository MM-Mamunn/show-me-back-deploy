import express from 'express';
const router = express.Router();

import {signupNew,login, userCheck, signAll} from '../signupControllers/signup.controllers.js'

router.post('/new',signupNew);
router.post('/usercheck/',userCheck);
router.post('/login',login);
router.get('/all',signAll);

// router.get('/view/:id',viewSingleTask);

// router.post('/insert',insertTask);

// router.put('/update/:id',updateTask);

// router.delete('/delete/:id',deleteTask);

export default router;