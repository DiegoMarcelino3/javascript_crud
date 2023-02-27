const functions = require("firebase-functions")
const express = require("express")
const appConfig = require("./src/routes/index.js")

const app = express()

appConfig(app)
const port = 8080

app.listen(port, () => {
    console.log(`Server up and running in url: http://localhost:${port}`)
})

exports.api = functions.https.onRequest(app);