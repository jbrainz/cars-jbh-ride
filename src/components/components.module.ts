import { Module } from '@nestjs/common';
import { CarsModule } from './Cars/cars.module';

@Module({
  imports: [CarsModule],
})
export class ComponentsModule {}
