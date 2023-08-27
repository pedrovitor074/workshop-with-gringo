import { Injectable, Param } from '@nestjs/common';
import { filter } from 'rxjs';

@Injectable()
export class AppService {
  wowClass: any = [
    {
      classType: 'priest',
      level: '70',
      rating: '2000',
    },
    {
      classType: 'rogue',
      level: '60',
      rating: '2500',
    },
    {
      classType: 'warlock',
      level: '55',
      rating: '1500',
    },
  ];

  checkClass(name: string): any {
    return this.wowClass.filter((wowClass: any) => wowClass.classType === name);
  }
}
export class AppService2 {
  tarkovAmmo: any = [
    {
      caliber: '5.56',
      dmg: 'high',
    },
    {
      caliber: '7,62',
      dmg: 'high',
    },
    {
      caliber: '9.19',
      dmg: 'low',
    },
  ];

  checkAmmo(name: string): any {
    return this.tarkovAmmo.filter(
      (tarkovAmmo: any) => tarkovAmmo.caliber === name,
    );
  }
}
