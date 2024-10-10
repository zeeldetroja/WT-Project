const express= require('express');
const app= express();
const cors = require('cors');

require('dotenv').config();

const billRoutes= require('./router.bill');

app.use(express.json());
app.use(cors());
app.use('/',billRoutes);


app.listen(process.env.PORT,()=>{
    console.log("Server started @"+process.env.PORT);
});