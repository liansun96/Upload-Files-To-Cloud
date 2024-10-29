require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

app.get('/' , (req , res)=>{
    res.send('Upload File Home')
})

const port = process.env.PORT || 4000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listening on ${port} . . .`))
    } catch (error) {
        
    }
}

start()