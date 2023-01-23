const {Router} = require('express');
const Ninja = require('../models/ninja')

const router = new Router();

// Get data from api
router.get('/ninjas', async (req, res)  => {
  try {
    const ninjas = await Ninja.find();
    res.send({ninjas});
    
  } catch (error) {
    res.status(422).send({error: error.message});
  }
})

// create data
router.post('/ninjas', async (req, res)  => {
  try {
    const ninja = await Ninja.create(req.body);
    res.send({
      ninja
    });    
  } catch (error) {
    res.status(422).send({error: error.message});
  }
})

//update data
router.put('/ninjas/:id', async (req, res)  => {
  const {id} = req.params
  try {
    const ninja = await Ninja.findByIdAndUpdate({_id: id}, req.body)
    res.send({ninja})
  } catch (error) {
    res.status(422).send({error: error.message});
  }
})

//delete data
router.delete('/ninjas/:id', async (req, res)  => {
  const {id} = req.params
  try {
    const ninja = await Ninja.findByIdAndRemove({_id: id})
    res.send({ninja})
  } catch (error) {
    res.status(422).send({error: error.message});
  }
})

module.exports = router;