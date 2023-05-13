const mongoose = require("mongoose");

let articlesSchema = mongoose.Schema({
  articlename: {
    type: String,
  },
  date: {
    type: String,
  },
  authorname: {
    type: String,
  },
  highlight:{
    type:String
  },
  article: {
    type: String,
  },
});

const articles = mongoose.model("articles", articlesSchema);

module.exports = articles;
