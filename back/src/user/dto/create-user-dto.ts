import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'testemail@google.com',
    description: 'Электронная почта пользователя',
  })
  readonly email: string;

  @ApiProperty({
    example: 'testuser',
    description: 'Уникальный имя пользователя',
  })
  readonly username: string;

  @ApiProperty({
    example: 'root',
    description: 'Пароль пользователя',
  })
  readonly password: string;
}
