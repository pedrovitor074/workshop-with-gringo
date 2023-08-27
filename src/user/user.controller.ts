import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: any) {
    return this.userService.createUser(
      body.name,
      body.xPos,
      body.yPos,
      body.speed,
    );
  }

  @Get('/:name')
  getUser(
    @Param('name')
    name: string,
  ) {
    return this.userService.getUserByName(name);
  }
}
