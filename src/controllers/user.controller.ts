// @Controller('user')
// export class userController {
//   @Post('/signUp')
//   create(data: userData): response {
//     const { name, age, password } = data;
//     console.log(`create ${name} ${age} ${password}`);
//     return { status: HttpStatus.ACCEPTED, message: 'signedUp' };
//   }

//   @Get('/login')
//   give(): response {
//     return { status: HttpStatus.ACCEPTED, message: 'okokkokok' };
//   }
// }

import {
  Controller,
  HttpStatus,
  Get,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

interface response {
  status: number;
  message: string;
}
interface userData {
  name: string;
  age: number;
  password: string;
}

@Controller('user')
export class userController {
  @Post('/signUp')
  create(@Body() body: userData) {
    console.log(body);
    return { status: HttpStatus.ACCEPTED, message: 'signedUp' };
  }
}
