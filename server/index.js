 const express = require('express');
require('./connect')
const app = express();
const port = 5000;
const appRoutes = require('./routes/AppRoutes')



// middle ware

app.use(express.json())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use("/api",appRoutes)

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
});
