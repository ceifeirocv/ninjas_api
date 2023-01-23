const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const GeoSchema = new Schema ({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const ninjaSchema = new Schema({
  name: {
    type: String,
    unique:[true, 'Name already in use'],
    required: [true, 'Name field is required'],
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }, 
  //add geo location
  geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports =  Ninja; 