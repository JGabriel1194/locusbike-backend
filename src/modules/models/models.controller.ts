import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('models')
@ApiBearerAuth()
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  /**
   * 
   * @param res 
   * @param createModelDto 
   * @returns 
   */
  @Post()
  create(@Res() res: Response,@Body() createModelDto: CreateModelDto) {
    return this.modelsService.create(res,createModelDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.modelsService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response,@Param('id') id: string) {
    return this.modelsService.findOne(res,+id);
  }

  @Patch(':id')
  update(@Res() res: Response,@Param('id') id: string, @Body() updateModelDto: UpdateModelDto) {
    return this.modelsService.update(res,+id, updateModelDto);
  }

  @Delete(':id')
  remove(@Res() res: Response, @Param('id') id: string) {
    return this.modelsService.remove(res,+id);
  }

  @Get('modelName/:modelName')
  findByModelName(@Res() res: Response, @Param('modelName') modelName: string) {
    console.log('modelName',modelName);
    return this.modelsService.findByModelName(res,modelName);
  }
}
