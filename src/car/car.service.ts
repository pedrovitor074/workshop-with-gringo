import { Car } from "./car.model";

export class CarService {
  cars: Car[] = [];

  createCar(brand: string, color: string, model: string, dateCreated: string) {
    const car = new Car(brand, color, model, dateCreated);

    this.cars.push(car);

    return car;
  }

  getCarById(id: string) {
    return (
      this.cars.find((car: any) => {
        return car.id == id;
      }) ?? "This car doest not exist!"
    );
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
      return this.cars.sort(
        (a: Car, b: Car) => a.dateCreated.getTime() - b.dateCreated.getTime()
      );
    }
  }

  updateCar(id: string, brand: string, color: string, model: string) {
    this.cars.map((car: Car) => {
      if (car.id === id) {
        car.brand = brand;
        car.color = color;
        car.model = model;
      }
    });
  }

  deleteCar(id: string) {
    let target = this.cars.findIndex((car: Car) => car.id == id);

    delete this.cars[target];

    return `Car #${id} has been deleted.`;
  }
}
