const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/text-db-welleve').then(()=>{
//     console.log('connectffff')
// }) .catch((error)=>{
//     console.log(error)
// })
mongoose.connect("mongodb://127.0.0.1:27017/well-eve",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( () =>{
    console.log("Connectednfjhbbsj...");
}).catch( (err) =>{
    console.log(err)
})