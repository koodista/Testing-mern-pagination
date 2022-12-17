const mongoose = require("mongoose");
const { MongoClient } = require('mongodb')

const bikejourneySchema = new mongoose.Schema({
  departure: {
    type: Date,  
  },
  return: {
    type: Date,    
  },
  departureStationId: {
    type: Number,   
  },
  departureStationName: {
    type: String,  
  },
  returnStationId: {
    type: Number,  
  },
  returnStationName: {
    type: String,    
  },
  distance: {
    type: Number,   
  },
  duration: {
    type: Number,  
  }, 
}, { collection: '202105'});

const Bikejourney = mongoose.model("Bikejourney", bikejourneySchema);

module.exports = Bikejourney;
