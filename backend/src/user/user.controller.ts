import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { responseObject } from 'src/utils/lib';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: User) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    try {
      return responseObject({ data: await this.userService.findAll() });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        return new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return responseObject({ data: user });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.userService.remove(+id);
  }
}
