import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];

  createUser(ID: number, name: string, email: string, password: string) {
    var specialCharacters =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    console.log(password);
    if (!specialCharacters.test(password)) {
      return 'This is an insecure password';
    }

    const user = new User(ID, name, email, password);
    if (this.users.filter((userArray) => userArray.email === email).length) {
      return 'This email is already in use.';
    }
    this.users.push(user);
    return user;
  }

  login(email: string, password: string) {
    if (this.users.length === 0) {
      return 'There are currently no users logged into our system.';
    }
    // Extra #2 - Make it so user must input email/password correctly
    if (this.users.filter((user) => user.email === email).length) {
      if (this.users.filter((user) => user.password === password).length)
        return 'You are logged in';
    }
    return 'This user is not in the system';
  }
  getUserByID(ID: number) {
    return this.users.filter((user) => user.ID === ID);
  }

  getAllUsers() {
    if (this.users.length === 0) {
      return 'There are no users at this time';
    }
    return this.users;
  }
}
