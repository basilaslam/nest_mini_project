import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { userController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [AppController, userController],
})
export class AppModule {}
