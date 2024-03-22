import {
  Body,
  Controller,
  Delete,
  Get,
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
    return this.coffeeService.findOne(id);
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
