const User = require( "../models/user.js")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// User registration
 const register = async (req, res) => {
    try {
        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

     const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        photo:req.body.photo
     }) 
     await newUser.save()

res.status(200).json({
    success:true,
    message:"Successfully created"
})


    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Failed to  create .Try Again"
        })

    }
};




 const login = async (req, res) => {
    const { email, password } = req.body; // Destructure email and password from req.body

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const checkCorrectPassword = await bcrypt.compare(password, user.password);
        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: 'Incorrect email or password' });
        }

        const { password: userPassword, role, ...rest } = user._doc;

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '2d' });

        res.cookie('accessToken', token, { httpOnly: true, expires: new Date(Date.now() + 2 * 24 *  60 *60 * 60 * 1000) });

        res.status(200).json({ success: true, token, data: { ...rest }, role });
    } catch (err) {
        console.error('Error in login:', err); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



module.exports = { register,login };