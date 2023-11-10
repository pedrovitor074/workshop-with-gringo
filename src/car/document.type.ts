export type MaintenenceDone = {
  oilChange: boolean;

  tireRotation: boolean;

  airFilterChange: boolean;
};

export type CarDocuments = {
  mileage: string;

  servicesDone: MaintenenceDone;

  newTires: boolean;

  lastPurchaseDate: any;
};
