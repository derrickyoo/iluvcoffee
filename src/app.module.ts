import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // `forRoot` is a static method that will load and parse the process.env file from the default location (project root directory)
    ConfigModule.forRoot(),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT, // everything from process .env is a string so we cast it to a number using "+"
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // load modules automatically
      synchronize: true, // ensures TypeORM entites are synced with the DB everytime we run our application (disable this in production)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
