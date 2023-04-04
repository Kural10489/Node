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
          username:String
        },
        { timestamps: true }
      )
    );
  
    return schema;
  };