import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

//"mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db"
const PRODUCT_GALLERY_DB_URL = process.env.PRODUCT_GALLERY_DB_URL

mongoose.connect(PRODUCT_GALLERY_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", () => {
    console.log("> error occurred from the database");
});
database.once("open", () => {
    console.log("> successfully opened the database");
});

export default mongoose;