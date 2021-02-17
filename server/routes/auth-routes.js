const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const {Router} = require('express');
const User = require('../models/UsersCn')
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'minimum password length must be 6 characters').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: 'incorrect credentials' })
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'User already exist' });
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: 'user succesfully created.' });
        }
        catch (e) {
            res.status(500).json({ message: 'somthing went wrong, try again...  ERROR :' + e });
        }
    })

router.post(
    '/login',
    [
        check('email', 'Please enter valid email').isEmail(),
        check('password', 'Password can not be empty').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array(), message: 'incorrect credentials' })
            }
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message:`user isn't exist`});
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message:`password is incorect`})
            }
            const token = jwt.sign(
                { userId: user.id },
                '123',
                {expiresIn: '168h'}
            )
            res.cookie('tokenlogin' ,token, {maxAge: 7*24*60*60*1000}); // 7 days (1000ms *60sec *60min * 24hours *7days)
            res.json({token,email: user.email, login: true, userId: user.id,message:"you have been logged in seccessfuly"})
        }
        catch (e) {
            res.status(500).json({ message: 'somthing went wrong, try again...  ERROR:  ' + e });
        }

    })

router.get('/me', async (req, res) => {
    try{
        let resCookie = req.cookies.tokenlogin;
        if (!resCookie){
          return res.status(200).json({login: false,message: "Token is empty, are u sure that user logged in?"})
        }
        let token = jwt.verify(resCookie, '123');
        let user = await User.findOne({ _id: token.userId }).select('-password');
        res.status(201).json({login: true, items:{id: token.userId, email: user.email, token: req.cookies.tokenlogin}})
      }
    catch(e){
        res.status(500).json({message: 'Something went wrong, try again... EROR  '+ e})
        console.log("ERROR: ",e)
    }
})

router.post('/logout', async (req, res)=>{
    res.clearCookie('tokenlogin').json({login: false,message: "Logged out succesfully"})
})

module.exports = router;
