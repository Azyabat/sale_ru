import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/users.model';
import { LoginDto } from './dto/login-dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { Op } from 'sequelize';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private user: typeof User) {}

  async login(loginDto: LoginDto) {
    const user = await this.user.findOne({
      where: { username: loginDto.username },
    });

    if (!user) {
      throw new HttpException(
        {
          message: 'Логин или пароль введен не верно!',
          status: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);

    if (!isMatch) {
      throw new HttpException(
        {
          message: 'Логин или пароль введен не верно!',
          status: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return { id: user.id, username: user.username, email: user.email };
  }

  async register(registerDto: CreateUserDto) {
    const isNotUnique = await this.user.findOne({
      where: {
        [Op.or]: [
          { username: registerDto.username },
          { email: registerDto.email },
        ],
      },
      attributes: ['id', 'email', 'username'],
    });

    if (isNotUnique) {
      throw new HttpException(
        {
          message: 'Имя пользователя или пароль не уникальны!',
          status: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashRounds = 10;
    const hash = await bcrypt.hash(registerDto.password, hashRounds);

    const user = await this.user.create({ ...registerDto, password: hash });
    user.password = undefined;

    return user;
  }
}
