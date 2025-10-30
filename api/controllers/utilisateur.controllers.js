const { v4: uuidv4 } = require ("uuid");


const db = require("../models");
const Pollutions = db.pollution;
const Op = db.Sequelize.Op;

// Find a single Utilisateur with an login
exports.getPollution = (req, res) => 
{


  Pollutions.findAll()
  .then(data => {

    if (data) {

      const pollution = {
        id: data.id,
        titre: data.titre,
        type_pollution: data.type_pollution,
        description: data.description,
        date_Observation: data.date_Observation,
        lieu: data.lieu,
        latitude: data.latitude,
        longitude: data.longitude,
        photo_url: data.photo_url
      };
    
      // res.send(data);
      res.send(pollution);

    } else {
      res.status(404).send({
        message: `Cannot find pollutions.`
      });
    }
  })
  .catch(err => {
    res.status(400).send({
      message: "Error retrieving pollutions"
    });
  });


};
