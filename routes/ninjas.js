// routes/api.js
const {Router} = require('express');
const Ninja = require('../models/ninja')

const router = new Router();

router.get('/', async (req, res)  => {
  try {
    const ninjas = await Ninja.find();
    res.status(200).json(ninjas);
    
  } catch (error) {
    console.log(error);
    res.status(422).json({error: error.message});
  }
})

// create data
router.post('/', async (req, res)  => {
  try {
    const ninja = await Ninja.create(req.body);
    res.status(200).json(ninja);    
  } catch (error) {
    console.log(error);
    res.status(422).json({error: error.message});
  }
})

//update data
router.put('/:id', async (req, res)  => {
  const {id} = req.params
  try {
    const ninja = await Ninja.findByIdAndUpdate({_id: id}, req.body)
    res.status(200).json(ninja)
  } catch (error) {
    res.status(422).json({error: error.message});
  }
})

//delete data
router.delete('/:id', async (req, res)  => {
  const {id} = req.params
  try {
    const ninja = await Ninja.findByIdAndRemove({_id: id})
    res.json({ninja})
  } catch (error) {
    res.status(422).json({error: error.message});
  }
})

module.exports = router;