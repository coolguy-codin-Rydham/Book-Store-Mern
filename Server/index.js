import express from "express"
const app = express()
import dotenv from "dotenv";
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log("Listening at http://localhost:"+process.env.PORT)
})