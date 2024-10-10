const mongoose=require('mongoose');

const schema=mongoose.Schema({
    companyName: String,
    amount: Number,
    date: Date, 
    description: String,
    status: String
});

module.exports= mongoose.model("Bill",schema);