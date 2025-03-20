import cors from "cors";
import "dotenv/config";
import express from "express";
import { cityRouter} from "./routes/cities.js";
import attractionsRouter from "./routes/attractions.js";
import imagesRouter from "./routes/images.js";
import itinerariesRouter from "./routes/itineraries.js";
import geocodeRouter from "./routes/geocode.js";


const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(express.json());

app.use("/api/cities", cityRouter);
app.use("/api/attractions", attractionsRouter);
app.use("/api/images", imagesRouter);
app.use("/api/itineraries",itinerariesRouter );
app.use("/api/loc", geocodeRouter);


app.listen(PORT, () => {
  console.log(`SERVER STARTED SUCCESSFULLY AND LISTENING AT ${PORT}`);
});
