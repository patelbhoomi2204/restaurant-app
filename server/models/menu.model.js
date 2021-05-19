const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
});

const menuSchema = new mongoose.Schema({
  categoryName: {
    type: String
  },
  items: [itemSchema]
});

const Menu =  mongoose.model("Menu", menuSchema)

module.exports = Menu;
