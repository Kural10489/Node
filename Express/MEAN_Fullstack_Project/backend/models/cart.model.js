module.exports = mongoose => {
    const schema = mongoose.model(
      "cartpages",
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
          totalAmount:Number,
          orderPlacedOn:String,
          username:String
        },
        { timestamps: true }
      )
    );
  
    return schema;
  };