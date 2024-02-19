import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
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
