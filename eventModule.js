const EventEmitter=require('node:events');
// const { EventEmitter } = require('node:stream');
const emitter= new EventEmitter();

emitter.on("Order-pizza",(size,topping)=>{
 console.log(`Order Received ! baking a ${size} pizza with ${topping}`);
});
emitter.on("Order-pizza",(size)=>{
    if(size==="large"){
        console.log("Serve Complementry drink");
    }
});
console.log("Syncronous Log");
emitter.emit("Order-pizza","large","chicken");
