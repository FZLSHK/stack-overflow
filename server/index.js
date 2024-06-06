import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' 
import  dotenv  from 'dotenv'
import userRoutes from './routes/user.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())
app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes)


const port = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL).then(() => app.listen(port, () => { console.log(`server is running on ${port}`) })).catch((err) => console.log(err.message))