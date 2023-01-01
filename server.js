const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const port = 3000;
const todoRouter = require("./todoRoute")
// const cors = require('cors')

// app.get("/", (req , res) => {
//   res.send("hello world")
// })

// app.listen(3000)

app.use(bodyparser.json())
// app.use(
//     cors({origin: "*"})
// )

app.use("./todo" , todoRouter)

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://Isca:karplemoy6@cluster0.qoqgqvo.mongodb.net/?retryWrites=true&w=majority');
  
// }

// const TodosSchema = new mongoose.Schema({
//     todo: String
//   });

//   const Todos = mongoose.model('Todos', TodosSchema);



// app.get("/todo", async (req, res) => {
//   var todos = await Todos.find({})
//   res.send(todos)
// });

// app.post("/todo/create", (req, res) => {
//   var newtodo = new Todos ({ todo: req.body.todo})
//   newtodo.save()
//   res.send({ message : "inserted" })
// });

// app.put("/todo/:id", async (req, res) => {
//    await Todos.updateOne({ id : req.params.id} , {todo : req.body.todo})
//    res.send({message : "updated"})
// });

// app.delete("/todo/:id" , async (req , res)=> {
//     await Todos.deleteOne({ id : req.params.id})
//     res.send({ message : "deleted"})
// })

app.listen(port, () => {
  console.log("app is running on port : " + port);
});
