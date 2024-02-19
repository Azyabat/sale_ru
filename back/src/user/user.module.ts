import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './users.model';

@Module({
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
})
export class UserModule {}