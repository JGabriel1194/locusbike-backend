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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags, ApiHeader, ApiResponse, ApiBasicAuth, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from "express";

@ApiTags('users')
@ApiBasicAuth()
@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Auth token',
  required: true,
})

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@ApiBody({ type: [CreateUserDto] })
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return this.usersService.create(createUserDto, res);
  }

  //@UseGuards(AuthGuard)
  @Get()
  findAll(@Res() res: Response, @Headers() headers: any) {
    return this.usersService.findAll(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
