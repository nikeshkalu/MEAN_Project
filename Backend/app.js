const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/restApi', { useNewUrlParser: true });
db.then(() => { console.log('Mongodb Connected'); });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// app.use(express.bodyParser())
app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,content-type,Accept")
    res.header("Access-Control-Allow-Credentials", true);


    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,DELETE,GET")
        return res.status(200).json({})
    }
    next()
})
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/user')

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/user', userRoutes)

app.use('/', () => {

})

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app