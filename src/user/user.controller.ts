import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Post()
  createUser(@Param() params: any) {}

  @Get('/:name')
  getUser(
    @Param('name')
    name: string,
  ) {}
}
