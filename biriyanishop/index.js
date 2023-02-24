
const BiriyaniShop=require("./biriyanishop");
const biriyanishop = new BiriyaniShop();
biriyanishop.on("order",(quant,type)=>{
    console.log(`Order recieved! cooking a ${type} biriyani of ${quant}`);
})
biriyanishop.displayorder();
biriyanishop.order('Half plate','chicken');

biriyanishop.displayorder();
biriyanishop.order('Full plate','Mutton');