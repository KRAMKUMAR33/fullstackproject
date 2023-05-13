// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/BACKEND')
// .then(()=> console.log('connected')).catch((error)=>{
//     console.log(error)
// })

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://RANJITHram:RANJITHram@cluster0.tzyrbuc.mongodb.net/BACKEND?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error(error));

