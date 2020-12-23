

const express = require("express");

const socket = require("socket.io");

const cors = require("cors")

const app = express();

app.use(cors())


const port = process.env.PORT || 80;

app.use(express.static("public"));

const server = app.listen(port, () => {

    console.log("server running on " + port)


})



const io = socket(server);


io.on("connection", (socket) => {


    console.log("connected")
    socket.on('data', data => {
        io.emit('client', data);
        console.log(data);
    });

})

