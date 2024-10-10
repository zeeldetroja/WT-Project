const express= require('express');

const router= express.Router();

const Bill=require('./schema.bill');

const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

const mongoose=require('mongoose');
const connectionString=process.env.MONGODB_URL;
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected");

    //GetOne
    router.get('/bill/:_id',async(req,res)=>{ 
        const ans=await Bill.findOne({_id:req.params._id});
        res.send(ans);
    });

    //GetAll
    router.get('/bill',async(req,res)=>{
        const ans=await Bill.find();
        res.send(ans);
    });

    //Create
    router.post('/bill',async(req,res)=>{
        const bill=new Bill({...req.body});
        const ans=await bill.save();
        res.send(ans);
    });

    //Delete
    router.delete('/bill/:_id',async(req,res)=>{
        const ans=await Bill.deleteOne({_id:req.params._id});
        res.send(ans);
    });

    //Update
    router.put('/bill/:_id',async(req,res)=>{
        const bill=await Bill.findOne({_id:req.params._id});
        bill.companyName=req.body.companyName;
        bill.date=req.body.date;
        bill.amount=req.body.amount;
        bill.description=req.body.description;
        bill.status=req.body.status;


        const ans=await bill.save();
        res.send(ans);
    });

    //Search
    router.get('/bill/search/:text',async(req,res)=>{
        const ans = await Bill.find({
            companyName:{
                $regex:req.params.text
            }   
        });
        console.log(ans);   
        res.send(ans);
    });

});

module.exports=router;