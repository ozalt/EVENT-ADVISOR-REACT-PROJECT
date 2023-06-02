const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.model');
const port = 1337;
const cors = require('cors');
app.use(cors());

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/text-db-welleve').then(()=>{
    console.log('connectffff')
}) .catch((error)=>{
    console.log(error)
})


// Define a route
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.passowrd,
        })
        res.json({status :'ok'})
    } catch (err){
        console.log(err);
        res.json({status: 'error', error:'Duplicate email'})
    }
});

// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await bcrypt.compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = jwt.sign(
// 			{
// 				name: user.name,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
});
