const express =  require('express');
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api')

require('dotenv').config();

const app =  express();
const PORT = process.env.PORT || 4000;

main().catch(err => console.log(err));

console.log(process.env.MONGO_URL)

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
} 

app.use(express.json())

app.use('/api/v1', apiRoutes)

app.listen(PORT, () => {
  console.log(`Now listening for request on http://127.0.0.1:${PORT}`)
})