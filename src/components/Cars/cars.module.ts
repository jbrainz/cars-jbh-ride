import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { Car } from './entities/car';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
