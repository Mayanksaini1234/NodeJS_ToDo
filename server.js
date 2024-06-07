import {app} from "./index.js";
import { connectDb } from "./data/database.js";

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} on the ${process.env.NODE_ENV} mode `);
  });
  