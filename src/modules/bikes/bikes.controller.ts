import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('bikes')
@ApiBearerAuth()
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(AnyFilesInterceptor({
    storage: diskStorage({
      destination: './public/uploads/images',
      filename: (req, file, callback) => {
        const uniqueSuffix =
          Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const fileName = `${uniqueSuffix}${ext}`;
        return callback(null, fileName);
      },
    }),
  }))
  create(@Res() res: Response, @Body() createBikeDto: CreateBikeDto, @UploadedFiles() images:  Array<Express.Multer.File>) {
    return this.bikesService.create(res,createBikeDto,images);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.bikesService.findAll(res);
  }

  @Get(':serie')
  findBySerie(@Res() res: Response,@Param('serie') serie: string){
    return this.bikesService.findBySerie(res,serie)
  }

  @Get(':id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    return this.bikesService.findOne(res,+id);
  }

  @Patch(':id')
  update(@Res() res: Response, @Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(res,+id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Res() res: Response,@Param('id') id: string) {
    return this.bikesService.remove(res,+id);
  }
}
