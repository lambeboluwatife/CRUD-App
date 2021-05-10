const express = require("express");
const router = express.Router();

// Data Model
const Data = require("../models/Data");

// landing page
router.get("/", (req, res) => {
  return res.json({ message: "This is a CRUD App" });
});

// INDEX - show all available data
router.get("/datas", (req, res) => {
  // Get all data from DB
  Data.find({}, (err, allDatas) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (allDatas.length == 0) {
      return res.status(200).json({ message: "No data available" });
    } else {
      return res.status(200).json({ Data: allDatas });
    }
  });
});

// GET - Get a particular data
router.get("/datas/:id", (req, res) => {
  Data.findById(req.params.id, (err, foundData) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ foundData });
    }
  });
});

// CREATE - create new data
router.post("/datas", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const country = req.body.country;

  if (!name || !email || !country) {
    return res.status(400).json({ message: "Enter all fields" });
  } else {
    const newData = {
      name: name,
      email: email,
      country: country,
    };

    // create new data and save to DB
    Data.create(newData, (err, newlyCreated) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: "Data Created" });
      }
    });
  }
});

// PUT - Edit existing data
router.put("/datas/:id", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const country = req.body.country;

  const newData = {
    name: name,
    email: email,
    country: country,
  };
  Data.findByIdAndUpdate(req.params.id, newData, (err) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ message: "Data updated" });
    }
  });
});

// DELETE - delete a data
router.delete("/datas/:id", (req, res) => {
  Data.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ message: "Data deleted" });
    }
  });
});

router.use("*", (req, res) => {
  return res.status(404).json("Route not found");
});

module.exports = router;
