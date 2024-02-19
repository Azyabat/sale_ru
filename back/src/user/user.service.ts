import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';
import { ImpersonalUserDto } from './dto/impersonal-user-dto';
import { User } from './users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private user: typeof User) {}
  async getAllUsers(): Promise<ImpersonalUserDto[]> {
    const users = await this.user.findAll({
      attributes: { exclude: ['password'] },
    });

    return users;
  }

  async getUserById(userId: number): Promise<ImpersonalUserDto> {
    const user = await this.user.findOne({
      where: { id: userId },
      attributes: { exclude: ['password'] },
    });

    return user;
  }

  async updateUser(
    userId: number,
    dto: CreateUserDto,
  ): Promise<ImpersonalUserDto> {
    const user = await this.user.findOne({
      where: { id: userId },
      attributes: { exclude: ['password'] },
    });

    await user.update(dto);

    return user;
  }

  async removeUser(userId: number) {
    await this.user.destroy({ where: { id: userId } });
  }
}
