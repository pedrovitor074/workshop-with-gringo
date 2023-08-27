import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name/:name')
  findOne(@Param('name') name: any): string {
    return this.appService.checkClass(name);
  }
}
// export class AppService2 {
//   constructor(private readonly appService: AppService2) {}
//   @Get('/caliber/:caliber')
//   findOne(@Param('caliber') caliber: any): string {
//     return this.appService.checkAmmo(caliber);
//   }
// }
