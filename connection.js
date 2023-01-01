const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Isca:karplemoy6@cluster0.qoqgqvo.mongodb.net/?retryWrites=true&w=majority');
  
}

module.exports = mongoose