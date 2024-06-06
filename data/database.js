import mongoose from "mongoose";

export const connectDb = ()=>{
    mongoose.connect(process.env.mongo_URL).then(() => {
  console.log("conneted to mongodb ");
})
  .catch((err) => {
    console.error(err);
  });

}
