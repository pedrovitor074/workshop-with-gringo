import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { arrayBuffer } from 'stream/consumers';

@Injectable()
export class UserService {
  users: User[] = [];
  createUser(name: string, xPos: number, yPos: number, speed: number) {
    const user = new User();
    user.name = name;
    user.xPos = xPos;
    user.yPos = yPos;
    user.speed = speed;

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
