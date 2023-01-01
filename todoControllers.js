const Todos = require("./todoModule")

const getTodos = async (req, res) => {
    var todos = await Todos.find({})
    res.send(todos)
  };
  
  const addTodo = (req, res) => {
    var newtodo = new Todos ({ todo: req.body.todo})
    newtodo.save()
    res.send({ message : "inserted" })
  };
  
  const updateTodo = async (req, res) => {
     await Todos.updateOne({ _id : req.params.id} , {todo : req.body.todo})
     res.send({message : "updated"})
  };
  
  const deleteTodo = async (req , res)=> {
      await Todos.deleteOne({ _id : req.params.id})
      res.send({ message : "deleted"})
  }

  module.exports = {
    getTodos, addTodo, updateTodo , deleteTodo
  }