const express = require("express");

const app = express();

let visitorCount = 0;

class CarService {
  cars = [];

  getCarById(id) {
    console.log(id);
    if (this.cars.filter((cars) => cars.id === id).length) {
      return "This car does not exist";
    } else {
      return this.cars.find((car) => {
        return car.id == id;
      });
    }
  }
  getAllCars() {
    if (this.cars.length == 0) {
      return "There are no cars currently in the database";
    } else {
      return this.cars;
    }
  }
  createCar(id, brand, color, model) {
    if (this.cars.filter((cars) => cars.id === id).length) {
      return "This ID is already being used";
    } else {
      this.cars.push({ id, brand, color, model });
      return `${brand} + ${color} + ${model} car has been created`;
    }
  }
  deleteCar(id) {
    let target = this.cars.findIndex((car) => car.id == id);
    delete this.cars[target];

    return `Car #${id} has been deleted.`;
  }
  updateCar(id, brand, color, model) {
    let targetIndex = this.cars.findIndex((car) => car.id == id);
    this.cars[targetIndex].brand = brand;
    this.cars[targetIndex].model = model;
    this.cars[targetIndex].color = color;
    console.log(targetIndex);
  }
}

const service = new CarService();
const bodyParser = require("body-parser");

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
      req.params.brand,
      req.params.model,
      req.params.color
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
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(service.getCarById(id));
  res.end();
});
app.post("/", (req, res) => {
  res.send(
    service.createCar(
      req.body.id,
      req.body.brand,
      req.body.color,
      req.body.model
    )
  );
  res.end();
});
// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
