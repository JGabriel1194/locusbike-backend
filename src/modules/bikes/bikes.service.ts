import { Injectable } from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Bike } from './entities/bike.entity';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';

@Injectable()
export class BikesService {

  constructor(
    @InjectModel(Bike)
    private bikeModel: typeof Bike,
  ) {}
  async create(res: Response,createBikeDto: CreateBikeDto) {
    try {
      //verify if bike exist
      const existBike = await this.bikeModel.findOne({
        where: {
          bikeSerie: createBikeDto.bikeSerie,
        },
      });
      if (existBike) {
        return customResponse(false,res, 400, 'La serie pertenece a otra bicicleta', null);
      }
      // If not exist, we create the bike
      const newBike = await this.bikeModel.create(createBikeDto);
      return customResponse(true,res, 201, 'Bicicleta creada', newBike);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }

  async findAll(res: Response) {
    try {
      const allBikes = await this.bikeModel.findAll();

      if (allBikes.length > 0) {
        return customResponse(true, res, 200, 'Bicicletas encontradas', allBikes);
      }
      return customResponse(false, res, 404, 'No se encontraron bicicletas', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }

  async findOne(res: Response,id: number) {
    try {
      const bike = await this.bikeModel.findOne({ where: { id: id } });
      if (bike) {
        return customResponse(true, res, 200, 'Bicicleta encontrada', bike);
      }
      return customResponse(false, res, 404, 'Bicicleta no encontrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }

  async update(res: Response,id: number, updateBikeDto: UpdateBikeDto) {
    try {
      //find bike
      const bike = await this.bikeModel.findOne({ where: { id: id } });
      console.log('BIKE ----->', bike);
      if (bike) {
        //update bike
        const updateBike = await bike.update(updateBikeDto);
        return customResponse(true, res, 200, 'Bicicleta actualizada', updateBike);
      }
      return customResponse(false, res, 404, 'Bicicleta no encontrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }

  async remove(res: Response,id: number) {
    try {
      //find bike
      const bike = await this.bikeModel.findOne({ where: { id: id } });
      if (bike) {
        //delete bike
        bike.destroy();
        return customResponse(true, res, 200, 'Bicicleta eliminada', null);
      }
      return customResponse(false, res, 404, 'Bicicleta no encontrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(error);
    }
  }
}
