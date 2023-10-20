import { CarService } from "./carservice.model.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();

let visitorCount = 0;

const service = new CarService();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.put("/:id", (req, res) => {
  res.send(
    service.updateCar(
      req.params.id,
      req.body.owner,
      req.body.documents,
      req.body.brand,
      req.body.model,
      req.body.color,
      req.body.yearCreated
    )
  );
  res.end();
});
app.delete("/:id", (req, res) => {
  res.send(service.deleteCar(req.params.id));
  res.end();
});
app.get("/", (req, res) => {
  visitorCount = visitorCount + 1;
  res.send(`Welcome to my website, you are visitor number ${visitorCount}`);
  res.end();
});
app.get("/cars", (req, res) => {
  res.send(service.getAllCars());
  res.end();
});
app.get("/sortedcars", (req, res) => {
  res.send(service.getSortedCars());
  res.end();
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(service.getCarById(id));
  res.end();
});
app.post("/", (req, res) => {
  res.send(
    service.createCar(
      req.body.id,
      req.body.owner,
      req.body.documents,
      req.body.brand,
      req.body.color,
      req.body.model,
      req.body.yearCreated
    )
  );
  res.end();
});
// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
