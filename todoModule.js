const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Isca:karplemoy6@cluster0.qoqgqvo.mongodb.net/?retryWrites=true&w=majority');
  
}






const TodosSchema = new mongoose.Schema({
    todo: String
  });

  const Todos = mongoose.model('Todos', TodosSchema);

module.exports = Todos