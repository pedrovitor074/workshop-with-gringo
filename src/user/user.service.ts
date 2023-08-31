import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];
  createUser(ID: number, name: string, email: string, password: string) {
    const user = new User(ID, name, email, password);

    if (this.users.filter((userArray) => userArray.name === name).length) {
      return 'This email is already in use.';
    }
    this.users.push(user);
    return user;
  }
  login(email: string, password: string) {
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
