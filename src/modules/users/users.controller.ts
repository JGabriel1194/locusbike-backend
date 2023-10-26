import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from "express";
import { PasswordDto } from './dto/password.dto';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  /**
   * 
   * @param createUserDto - Data to create a new user
   * @param res - Response
   * @returns 
   */
  //@ApiBody({ type: [CreateUserDto] })
  @Post()
  create(@Body() createUserDto: UserDto, @Res() res: Response) {
    return this.usersService.create(res, createUserDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.usersService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.usersService.findOne(res,+id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.usersService.update(res, +id, updateUserDto);
  }

  @Delete(':id')
  remove(@Res() res: Response, @Param('id') id: string) {
    return this.usersService.remove(res,+id);
  }

  @Patch('updatePassword/:id')
  updatePassword(@Res() res: Response, @Param('id') id: string, @Body() password: PasswordDto) {
    return this.usersService.updatePassword(res, +id, password);
  }
  
}
