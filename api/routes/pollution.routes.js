

module.exports = app => {
    const pollution = require("../controllers/pollution.controllers.js");
  
    var router = require("express").Router();
  

   // nos routes / urls
    router.get("/", pollution.get);
    router.get("/:id", pollution.getById);
    router.post("/", pollution.post);
  
    app.use('/api/pollution', router);
  };


  