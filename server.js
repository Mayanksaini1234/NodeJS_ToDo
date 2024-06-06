import {app} from "./index.js";
import { connectDb } from "./data/database.js";

connectDb();

app.listen(process.env.Port, () => {
    console.log(`Listening on port ${process.env.Port} on the ${process.env.NODE_ENV} mode `);
  });
  