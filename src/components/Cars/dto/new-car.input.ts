import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000)
  @Min(1500)
  fareRate: number;

  @Field((type) => Int)
  @Max(1000)
  @Min(10, { message: "Daily price can't be that low!" })
  driverRate: number;

  @Field()
  mileage: string;

  @Field()
  speed: string;

  @Field()
  thumbnailsSrc: string;
}
