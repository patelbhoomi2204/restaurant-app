const MenuController = require("../controllers/menu.controller");

module.exports = app => {
  app.get("/api/menu", MenuController.findAllMenu);
  app.get("/api/menu/:_id", MenuController.findOneMenu);
  app.post("/api/menu/new", MenuController.createMenu);
}