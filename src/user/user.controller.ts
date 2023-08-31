import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { stringify } from 'querystring';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: any) {
    return this.userService.createUser(
      body.id,
      body.name,
      body.email,
      body.password,
    );
  }

  @Get('/:ID')
  getUser(
    @Param('ID')
    ID: number,
  ) {
    return this.userService.getUserByID(ID);
  }
  @Get('/all/users')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  // @Post('user/new/user')
  // login()
}
