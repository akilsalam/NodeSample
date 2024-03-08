const express =require('express')
const app = express();
const cors = require('cors')
const files = require('./files')


app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:"This is from backend"})
    
    console.log(files)
})

app.listen(3000,()=>{
    console.log('Listening');
})