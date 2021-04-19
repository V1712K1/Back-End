// criar objeto
function Emitter(){
    // adicionar propriedade eventos
    this.events = {};
}
// criar um método atraves da herança prototipada
Emitter.prototype.on = function(type, listener){

    if(this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener)
}

Emitter.prototype.emit = function(type){

    if(this.events[type] != undefined){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;