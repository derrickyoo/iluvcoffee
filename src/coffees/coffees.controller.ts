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

@Controller('coffees')
export class CoffeesController {
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
  create(@Body() body) {
    // return body;
    this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates #${id} coffee`;
    this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removed #${id} coffee`;
    this.coffeeService.remove(id);
  }
}
