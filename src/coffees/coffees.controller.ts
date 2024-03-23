import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  // "private" is a TypeScript access modifier
  // Shorthand to declare and initialize the CoffeeService available only to this class
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get('flavors')
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;

    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns ${id} coffee.`;
    const coffee = this.coffeeService.findOne(id);

    if (!coffee) {
      // throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee ${id} not found`);
    }

    return coffee;
  }

  @Post()
  create(@Body() createCoffeDto: CreateCoffeeDto) {
    // return body;
    this.coffeeService.create(createCoffeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removed #${id} coffee`;
    this.coffeeService.remove(id);
  }
}
