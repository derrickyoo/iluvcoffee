import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType marks all fields as optional and also inherits all validation rules applied via decorators as well as adds a single valudation rule to each field that is optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
