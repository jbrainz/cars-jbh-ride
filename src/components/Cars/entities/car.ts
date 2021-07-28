import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  fareRate: number;

  @Column()
  @Field()
  driverRate: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  speed: string;

  @Column()
  @Field()
  thumbnailsSrc: string;
}
