const EventEmitter=require('node:events');

class BiriyaniShop extends EventEmitter{
    constructor(){
        super();
        this.ordernumber=0;
    }
    order(quant,type){
        this.ordernumber++
        this.emit("order",quant,type);
    }
    displayorder(){
        console.log(`Order Number ${ this.ordernumber}`);
    }
}
module.exports=BiriyaniShop