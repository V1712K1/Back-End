const EventEmitter = require("eventes"),
const emitter = new EventEmitter();

emitter.on("messageLogged", function(){
    console.log("Listener called");
});

emitter.emit("messageLogged");
