import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { response } from 'express';
interface response {
  status: number;
  data: string;
}
@Controller()
export class AppController {
  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  getHello(): response {
    const res: response = { status: HttpStatus.EARLYHINTS, data: 'ok' };

    return res;
  }
}
