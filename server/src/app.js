console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { sequelize } = require('./models')
const morgan = require('morgan')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server listening on port ${config.port}`)
  })
