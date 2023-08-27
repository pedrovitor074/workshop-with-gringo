import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  users: User[] = [];
  createUser(name: string, xPos: number, yPos: number, speed: number) {
    const user = new User();
    user.name = name;
    user.xPos = xPos;
    user.yPos = yPos;
    user.speed = speed;

    this.users.push(user);
    return user;
  }
  getUserByName(name: string) {
    return this.users.filter((user) => user.name === name);
  }
}
