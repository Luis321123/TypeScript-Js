import express from "express";
const app = express();

import diaryRoutes from "./routes/diaries";

app.use('/api/diaries', diaryRoutes)

app.use(express.json()) // middleware

const PORT = 3000

app.get('ping', (_req, res) => {
    console.log('someone pinged')
    res.send('pong')
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

