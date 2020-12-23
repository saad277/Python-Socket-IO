

const express = require("express");

const socket = require("socket.io");

const cors = require("cors")

const app = express();

app.use(cors())


const port = process.env.PORT || 80;

app.use(express.static("public"));





const io = socket(server);


io.on("connection", (socket) => {


    console.log("user connected ", socket.id)


    socket.on("message", (data) => {

        console.log("......")
        io.emit("response", data)

    })


    socket.on("disconnect", () => {


        console.log("2221321333332222")

    })





})

const server = app.listen(port, () => {

    console.log("server running on " + port)


})