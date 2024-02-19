import { ApiProperty } from '@nestjs/swagger';

export class ImpersonalUserDto {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор пользователя',
  })
  readonly id: number;

  @ApiProperty({
    example: 'testemail@google.com',
    description: 'Электронная почта пользователя',
  })
  readonly email: string;

  @ApiProperty({
    example: 'testuser',
    description: 'Уникальное имя пользователя',
  })
  readonly username: string;
}
