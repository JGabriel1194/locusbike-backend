import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
@ApiBearerAuth()
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  /**
   *
   * @param res - Response
   * @param createBrandDto - Data to create a new brand
   * @returns
   */
  @Post()
  create(@Res() res: Response, @Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(res, createBrandDto);
  }

  /**
   * Method to find all brands
   * @param res - Response
   * @returns
  */
  @Get()
  findAll(@Res() res: Response) {
    return this.brandsService.findAll(res);
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.brandsService.findOne(res, +id);
  }

  @Patch(':id')
  update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandsService.update(res, +id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
