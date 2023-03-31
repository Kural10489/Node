module.exports = mongoose => {
    const schema = mongoose.model(
      "Backend",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          mobileNumber: Number,
          email: String,
          password:String,
          address:String
        },
        { timestamps: true }
      )
    );
  
    return schema;
  };