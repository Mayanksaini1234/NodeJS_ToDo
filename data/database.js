import mongoose from "mongoose";

export const connectDb = ()=>{
    mongoose.connect(process.env.mongo_URL).then((c) => {
  console.log(`conneted to mongodb ${c.connection.host}` );
})
  .catch((err) => {
    console.error(err);
  });

}
