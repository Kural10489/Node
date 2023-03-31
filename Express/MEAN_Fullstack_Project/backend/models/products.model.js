module.exports = mongoose => {
    const schema = mongoose.model(
      "products",
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
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });
  
    // const Schema = mongoose.model("tutorial", schema);
    // return Schema;
    return schema;
  };