import { Documents } from "./documents.model.js";
import { Owner } from "./owner.model.js";
const documents = new Documents();
const owner = new Owner();
export class CarService {
  cars = [];

  getCarById(id) {
    console.log(id);
    if (this.cars.filter((cars) => cars.id === id).length) {
      return "This car does not exist";
    } else {
      return this.cars.find((car) => {
        return owner, car.id == id;
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
  getSortedCars() {
    if (this.cars.length == 0) {
      return "There are no cars currently in the database";
    } else {
      return this.cars.sort((a, b) => a.yearCreated - b.yearCreated);
    }
  }
  createCar(id, owner, documents, brand, color, model, yearCreated) {
    if (this.cars.filter((cars) => cars.id === id).length) {
      return "This ID is already being used";
    } else {
      this.cars.push({
        id,
        owner,
        documents,
        brand,
        color,
        model,
        yearCreated,
      });
      return `${owner} + ${brand} + ${color} + ${model} + ${yearCreated} car has been created`;
    }
  }
  deleteCar(id) {
    let target = this.cars.findIndex((car) => car.id == id);
    delete this.cars[target];

    return `Car #${id} has been deleted.`;
  }
  updateCar(id, owner, documents, brand, color, model, yearCreated) {
    let targetIndex = this.cars.findIndex((car) => car.id == id);
    this.cars[targetIndex].owner = owner;
    this.cars[targetIndex].documents = documents;
    this.cars[targetIndex].brand = brand;
    this.cars[targetIndex].model = model;
    this.cars[targetIndex].color = color;
    this.cars[targetIndex].yearCreated = yearCreated;
    console.log(this.cars);
  }
}
