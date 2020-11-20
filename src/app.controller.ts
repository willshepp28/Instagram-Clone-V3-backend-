import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("customers")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @HttpCode(200)
  findAll(): Array<Object> {
    return this.appService.getCustomers();
  }
}
