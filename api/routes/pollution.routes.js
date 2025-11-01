

module.exports = app => {
    const pollution = require("../controllers/pollution.controllers.js");
  
    var router = require("express").Router();
  

   // nos routes / urls
    router.get("/", pollution.get);
    router.get("/:id", pollution.getById);
    router.post("/", pollution.post);
    router.put("/:id", pollution.put);

    app.use('/api/pollution', router);
  };


  