

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./new/Data');
const port = 4000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/TODOLIST',
    console.log('MongoDB succesfully connected')
)



app.post('/add', (req, res) => {
  const { task } = req.body;
  TodoModel.create({ task })
      .then(result => res.json(result))
      .catch(err => console.log(err));
   
});

app.get('/get',(req,res)=>{
  TodoModel.find()
  .then(result=> res.json(result))
  .catch(err=>console.log(err));
});
  
app.put('/edit/:id',(req,res)=>{
  const{id} = req.params;
  TodoModel.findByIdAndUpdate(id,{done:true},{new:true})
  .then(result=> res.json(result))
  .catch(err=>res.json(err));
 });

app.put('/update/:id',(req,res)=>{
  const{id} = req.params;
  const{task} = req.body;
  TodoModel.findByIdAndUpdate(id,{task:task})
  .then(result=> res.json(result))
  .catch(err=>res.json(err));
 });

app.delete('/delete/:id',(req,res)=>{
  const{id} = req.params;
  TodoModel.findByIdAndDelete({_id:id})
  .then(result=> res.json(result))
  .catch(err=>res.json(err));
 }); 



app.listen(port,()=>{
        console.log(`server running on port ${port}`);
        
    });



