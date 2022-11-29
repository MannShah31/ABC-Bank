import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Router from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', Router)


mongoose.connect("mongodb+srv://mannshah31:mannshah31@cluster0.loltl2d.mongodb.net/cluster0?retryWrites=true&w=majority");



app.listen(8000, () => {
    console.log("Server started on port 8000")
})
