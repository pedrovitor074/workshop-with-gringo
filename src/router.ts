import { Router } from "express";
import { CarService } from "./car/car.service";

const router: Router = Router();
const service = new CarService();
let visitorCount = 0;

//Routes

/**
 * ROADMAP
 * 1 - We gonna change the routes we call to a controller
 * 2 - Resource Root
 */

router.get("/", (req, res) => {
  visitorCount = visitorCount + 1;
  res.send(`Welcome to my website, you are visitor number ${visitorCount}`);
  res.end();
});

router.put("/:id", (req, res) => {
  res.send(
    service.updateCar(
      req.params.id,
      req.body.brand,
      req.body.color,
      req.body.model,
      req.body.dateCreated,
      req.body.owner
    )
  );
  res.end();
});

router.delete("/:id", (req, res) => {
  res.send(service.deleteCar(req.params.id));
  res.end();
});

router.get("/cars", (req, res) => {
  res.send(service.getAllCars());
  res.end();
});

router.get("/sortedcars", (req, res) => {
  res.send(service.getSortedCars());
  res.end();
});

router.get("/car/:id", (req, res) => {
  const id = req.params.id;
  res.send(service.getCarById(id));
  res.end();
});

router.post("/", (req, res) => {
  res.send(
    service.createCar(
      req.body.brand,
      req.body.color,
      req.body.model,
      req.body.dateCreated,
      req.body.owner,
      req.body.carDocuments
    )
  );
  res.end();
});

export { router };
