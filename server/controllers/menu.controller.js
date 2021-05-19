const Menu = require("../models/menu.model");


//Get all
module.exports.findAllMenu = (req, res) => {
  Menu.find()
  .then(allMenu => res.json({allMenu: allMenu}))
  .catch(err => res.json({message: "Wrong while grabing all menus!", error: err}))
}
//get one
module.exports.findOneMenu = (req, res) => {
  Menu.find({categoryName: req.params._id})
    .then(oneMenu => res.json({oneMenu: oneMenu}))
    .catch(err => res.json ({message:"Wrong while grabing one menu.", error: err}))
}
//create
module.exports.createMenu = (req, res) => {
  Menu.create(req.body)
    .then(oneMenu => res.json({oneMenu: oneMenu}))
    .catch(err => res.json ({message:"Wrong while creating one mwnu.", error: err}))
}