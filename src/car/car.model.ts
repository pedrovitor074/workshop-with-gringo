/**
 * Information about the object we are working, on this case is CAR.
 * npm install --save @types/uuid
 * npm i uuid
 */
import { v4 as uuidv4 } from "uuid";

export class Car {
  id: string;

  brand: string;

  color: string;

  model: string;

  dateCreated: Date;

  constructor(
    brand: string,
    color: string,
    model: string,
    dateCreated: string
  ) {
    this.id = uuidv4();
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.dateCreated = new Date(dateCreated);
  }
}
