module.exports = mongoose => {
    const schema = mongoose.model(
      "orderspages",
      mongoose.Schema(
        {
          id:Number,
          title: String,
          price: Number,
          description:String,
          category: String,
          quantity: String,
          size:String,
          image: String,
          image2:String,
          image3: String,
          image4: String,
          username:String,
          totalAmount:Number,
          orderPlacedOn:String,
          address:String
        },
        { timestamps: true }
      )
    );
  
    return schema;
  };