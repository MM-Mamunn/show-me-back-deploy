import express from 'express';
const router = express.Router();
import { friends, frndCheck, frndNew } from '../friendControllers/friend.controllers.js';
// import {signupNew,login, userCheck} from '../signupControllers/signup.controllers.js'

router.post('/new',frndNew);
router.post('/frndcheck',frndCheck);
router.get('/frnds/:user',friends);
export default router;