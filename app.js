require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const fileUpload = require('express-fileupload')
const ProductRouter = require('./routes/productRoutes')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json())
app.use('/api/v1/products', ProductRouter)
app.use(fileUpload({useTempFiles : true}))

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.get('/' , (req , res)=>{
    res.send('Upload File Home')
})

const port = process.env.PORT || 4000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listening on ${port} . . .`))
    } catch (error) {
        console.log(error);        
    }
}

start()