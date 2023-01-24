const express =  require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')

const apiRoutes = require('./routes/ninjas');
const docsInfo = require('./docs')

require('dotenv').config();

const app =  express();
const PORT = process.env.PORT || 4000;

main().catch(err => console.log(err));

console.log(process.env.MONGO_URL)

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
} 

app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docsInfo))

app.use('/api/v1/ninjas', apiRoutes)

app.listen(PORT, () => {
  console.log(`Now listening for request on http://127.0.0.1:${PORT}`)
})