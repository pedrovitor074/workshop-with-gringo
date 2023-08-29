import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];
  createUser(name: string) {
    const user = new User();
    user.name = name;

    if (this.users.filter((userArray) => userArray.name === name).length) {
      return 'This user already exists in our system';
    }
    this.users.push(user);
    return user;
  }
  getUserByName(name: string) {
    return this.users.filter((user) => user.name === name);
  }

  getAllUsers() {
    if (this.users.length === 0) {
      return 'There are no users at this time';
    }
    return this.users;
  }
}
