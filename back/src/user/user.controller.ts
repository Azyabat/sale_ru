import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user-dto';
import { ImpersonalUserDto } from './dto/impersonal-user-dto';
import { UserService } from './user.service';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'Получение списка пользователей' })
  @ApiResponse({ status: 200, type: [ImpersonalUserDto] })
  @Get('list')
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получение пользователя по id' })
  @ApiResponse({ status: 200, type: ImpersonalUserDto })
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({ summary: 'Обновление пользователя' })
  @ApiResponse({ status: 200, type: ImpersonalUserDto })
  @Put('update/:id')
  updateUserById(@Param('id') id: number, @Body() userDto: CreateUserDto) {
    return this.userService.updateUser(id, userDto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 200, type: null })
  @Delete(':id')
  destroyUserById(@Param('id') id: number) {
    return this.userService.removeUser(id);
  }
}
