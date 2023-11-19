import { Injectable } from '@nestjs/common';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Brake } from './entities/brake.entity';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';

@Injectable()
export class BrakesService {
  constructor(
    @InjectModel(Brake)
    private brakeModel: typeof Brake,
  ) {}

  /**
   * Method to create a new brake
   * @param res
   * @param createBrakeDto data to create a new brake
   * @returns
   */
  async create(res: Response, createBrakeDto: CreateBrakeDto) {
    try {
      const newBrake = await this.brakeModel.create(createBrakeDto);
      customResponse(true,res, 201, 'Frenos creados', newBrake);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }  
  }

  /**
   * Method to find all brakes
   * @returns
   */
  async findAll(res: Response) {
    try {
      const allBrakes = await this.brakeModel.findAll();
      if (allBrakes.length > 0) {
        customResponse(true,res, 200, 'Frenos encontrados', allBrakes);
      }
      customResponse(false,res, 404, 'No se encontraron frenos', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to find one brake by id
   * @param res
   * @param id brake id
   * @returns
   */
  async findOne(res: Response, id: number) {
    try {
      const brake = await this.brakeModel.findByPk(id);
      if (brake) {
        customResponse(true,res, 200, 'Freno encontrado', brake);
      }
      customResponse(false,res, 404, 'Freno no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to update a brake
   * @param res
   * @param id brake id
   * @param updateBrakeDto data to update a brake
   * @returns
   */
  async update(res: Response, id: number, updateBrakeDto: UpdateBrakeDto) {
    try {
      const brake = await this.brakeModel.findByPk(id);
      if (brake) {
        await brake.update(updateBrakeDto);
        customResponse(true,res, 200, 'Freno actualizado', brake);
      }
      customResponse(false,res, 404, 'Freno no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to remove a brake
   * @param res
   * @param id brake id
   * @returns
   */
  remove(res: Response,id: number) {
    return `This action removes a #${id} brake`;
  }
}
