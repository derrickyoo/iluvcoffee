import { Module } from '@nestjs/common';

// Provides metadata that NestJS uses to organize the application structure
@Module({
  // API routes instantiated by this module
  controllers: [],
  // Providers that should be available anywhere this module is imported
  exports: [],
  // List other modules that this module requires
  imports: [],
  // Services that need to be instantiated by the NestJS injector (can also be added to exports if you want to expose them to other modules that consume this module)
  providers: [],
})
export class CoffeesModule {}