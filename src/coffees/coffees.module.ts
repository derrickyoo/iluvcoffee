import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

// Provides metadata that NestJS uses to organize the application structure
@Module({
  // API routes instantiated by this module
  controllers: [CoffeesController],
  // Providers that should be available anywhere this module is imported
  exports: [],
  // List other modules that this module requires
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  // Services that need to be instantiated by the NestJS injector (can also be added to exports if you want to expose them to other modules that consume this module)
  providers: [CoffeesService],
  // providers: [
  //   {
  //     provide: CoffeesService,  // token
  //     useClass: CoffeesService, // class
  //   },
  // ],
})
export class CoffeesModule {}
