const getNinjas = require('./getNinjas');
const postNinja = require('./postNinja');
const deleteNinja = require('./deleteNinja');
const putNinja = require('./putNinja');

module.exports = {
  paths: {
    '/ninjas': {
      ...getNinjas,
      ...postNinja,
    },
    '/ninja/{id}':{
      ...deleteNinja,
      ...putNinja,
    }
  }
}