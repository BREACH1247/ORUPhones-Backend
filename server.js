const express = require('express');
const app = express();
const PORT = 3002;
const mongoose = require('mongoose')
const cors = require('cors');

const mongourl = "mongodb+srv://kingsmen47:aditya1247@nodetuts.uwugd.mongodb.net/population?retryWrites=true&w=majority"



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running on "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

app.use(cors())

//Connecting with the MongoDb

mongoose.connect(mongourl,{
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected")
})
.catch((e) => console.log(e))


const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: Number
  });

const User = mongoose.model('user', UserSchema);



//Api Routes

app.get("/gettable1",async(req, res)=>{
    try{
        const alluser = await User.find({ income: { $lt: "$5" }, car: { $in: ['BMW', 'Mercedes'] } });
        res.send({status: 200,data: alluser});
    }catch(e){
        console.log(e);
    }
})


app.get("/gettable2",async(req, res)=>{
    try{
        const alluser = await User.find({ gender: 'Male', phone_price : {$gt:10000}});
        res.send({status: 200,data: alluser});
    }catch(e){
        console.log(e);
    }
})

app.get("/gettable3",async(req, res)=>{
    try{
        const alluser = await User.find();
        const users = alluser.map(obj => obj.toJSON());
        const filter = users.filter(user => {
            return user.last_name.startsWith('M') &&
                   user.quote.length > 15 &&
                   user.email.includes(user.last_name.toLowerCase());
          });
        res.send({status: 'success',data: filter});
          
    }catch(e){
        console.log(e);
    }
})

app.get("/gettable4",async(req, res)=>{
    try{
        const alluser = await User.find({car: { $in: ['BMW', 'Mercedes','Audi'] } });
        const users = alluser.map(obj => obj.toJSON());
        const filteredUsers = users.filter(user => {
            const emailChars = user.email.split('');
            for (let i = 0; i < emailChars.length; i++) {
              if (isNaN(parseInt(emailChars[i]))) {
                continue;
              } else {
                return false;
              }
            }
            return true;
          });
          res.send({status: 200,data: filteredUsers})
    }catch(e){
        console.log(e);
    }
})

app.get("/gettable5",async(req, res)=>{
    try{
        const users = await User.find();
        const result = users.reduce((acc, curr) => {
            const cityIndex = acc.findIndex(item => item.city === curr.city);
            if (cityIndex === -1) {
              acc.push({ city: curr.city, count: 1, totalIncome: parseFloat(curr.income.slice(1)) });
            } else {
              acc[cityIndex].count += 1;
              acc[cityIndex].totalIncome += parseFloat(curr.income.slice(1));
            }
            return acc;
          }, []);
          
          result.sort((a, b) => b.count - a.count).slice(0, 10).forEach(item => {
            item.avgIncome = item.totalIncome / item.count;
            delete item.totalIncome;
          });
        res.send({status: 200,data: result.slice(0,10)});
    }catch(e){
        console.log(e);
    }
})
  
