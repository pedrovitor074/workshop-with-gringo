/**
 * Information about the object we are working, on this case is CAR.
 * npm install --save @types/uuid
 * npm i uuid
 */
import { v4 as uuidv4 } from "uuid";
import { CarOwner } from "./owner.type";
import { CarDocuments } from "./document.type";

export class Car {
  id: string;

  brand: string;

  color: string;

  model: string;

  dateCreated: Date;

  owner: CarOwner;

  carDocuments: CarDocuments;

  constructor(
    brand: string,
    color: string,
    model: string,
    dateCreated: string,
    owner: CarOwner,
    carDocuments: CarDocuments
  ) {
    this.id = uuidv4();
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.dateCreated = new Date(dateCreated);
    this.owner = owner;
    this.carDocuments = carDocuments;
  }
}
