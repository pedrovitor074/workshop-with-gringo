export class User {
  ID: number;
  name: string;
  email: string;
  password: string;

  constructor(ID: number, name: string, email: string, password: string) {
    this.ID = ID;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
