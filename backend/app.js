// ==== Using packages ====
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ==== Getting Data Model(Schema) ====
const Data = require("./models/Data.js");

// ==== Init app ====
const app = express();

// ==== Body Parser Middleware ====
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ==== Connection to MongoDB with Mongoose ====
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/qkmk", { useMongoClient: true })
  .then(function() {
    console.log("Successfully connected to MongoDB!");
  })
  .catch(function(err) {
    console.log(err);
  });

// ==== ROUTES ====

/* INDEX */
app.get("/", function(req, res, next) {
  res.send("Welcome to QKMK!");
});

/* GET ALL DATA */
app.get("/data", function(req, res) {
  // Code for handling data to be returned as JSON
  Data.find(function(err, data) {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

/* CREATE DATA */
app.post("/data/add", function(req, res) {
  // Code for handling create data to DB and return as JSON
  const data = new Data();
  data.pikaKufitare = req.body.pikaKufitare;
  data.hyrjeMinMinuta = req.body.hyrjeMinMinuta;
  data.hyrjeMaxMinuta = req.body.hyrjeMaxMinuta;
  data.daljeMinMinuta = req.body.daljeMinMinuta;
  data.daljeMaxMinuta = req.body.daljeMaxMinuta;
  data.hyrjeMinMetra = req.body.hyrjeMinMetra;
  data.hyrjeMaxMetra = req.body.hyrjeMaxMetra;
  data.daljeMinMetra = req.body.daljeMinMetra;
  data.daljeMaxMetra = req.body.daljeMaxMetra;
  Data.create(data, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

/* GET ONE DATA */
app.get("/data/:id", function(req, res) {
  // Code for getting one specific DATA and return as JSON
  Data.findById(req.params.id, function(err, data) {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

/* UPDATE DATA */
app.put("/data/update/:id", function(req, res) {
  // Code for updating one specific data and return as JSON
  let updatedData = {
    pikaKufitare: req.body.pikaKufitare,
    hyrjeMinMinuta: req.body.hyrjeMinMinuta,
    hyrjeMaxMinuta: req.body.hyrjeMaxMinuta,
    daljeMinMinuta: req.body.daljeMinMinuta,
    daljeMaxMinuta: req.body.daljeMaxMinuta,
    hyrjeMinMetra: req.body.hyrjeMinMetra,
    hyrjeMaxMetra: req.body.hyrjeMaxMetra,
    daljeMinMetra: req.body.daljeMinMetra,
    daljeMaxMetra: req.body.daljeMaxMetra,
  };
  Data.findOneAndUpdate(
    { _id: req.params.id },
    updatedData,
    { new: true },
    function(err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    }
  );
});

/* DELETE DATA */
app.delete("/data/delete/:id", function(req, res) {
  // Code to delete one specific data and return message as JSON
  Data.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.json({ message: "Data successfully deleted!" });
  });
});

// ==== Run Application ====
app.listen(3001, () => {
  console.log("Express server is running at http://127.0.0.1:3001");
});
