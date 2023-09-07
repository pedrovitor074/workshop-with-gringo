import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];

  createUser(name: string, email: string, password: string) {
    var specialCharacters =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
    if (!specialCharacters.test(password)) {
      return 'This is an insecure password';
    }

    const user = new User(this.users.length + 1, name, email, password);

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
    const usersWithanEmail = this.users.find((user) => user.email === email);

    if (!usersWithanEmail) {
      return 'This user does not exist in the system';
    }
    if (usersWithanEmail.password === password) {
      return 'You are logged in';
    }
    return 'Incorrect Password';
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
