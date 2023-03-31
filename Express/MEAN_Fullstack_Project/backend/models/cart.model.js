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
          Quantity: Number,
          image: String,
          image2:String,
          image3: String,
          image4: String
        },
        { timestamps: true }
      )
    );
  
    return schema;
  };