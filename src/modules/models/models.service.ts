import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Modelo } from './entities/model.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Response } from 'express';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Op } from 'sequelize';

@Injectable()
export class ModelsService {
  constructor(
    @InjectModel(Modelo)
    private modelModel: typeof Modelo,
  ) {}

  /**
   * method to create a new model
   * @param res
   * @param createModelDto data to create a new model
   * @returns
   */
  async create(res:Response, createModelDto: CreateModelDto) {
    try {
      //verify if model exist
      const existModel = await this.modelModel.findOne({
        where: {
          modelName: createModelDto.modelName,
        },
      });
      if (existModel) {
        customResponse(false,res, 400, 'Modelo ya registrado', null);
      }
      // If not exist, we create the model
      const newModel = await this.modelModel.create(createModelDto);
      customResponse(true,res, 201, 'Modelo creado', newModel);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * Method to find all models
   * @param res
   * @returns
   */
  async findAll(res: Response) {
    try {
      const allModels = await this.modelModel.findAll();

      if (allModels.length > 0) {
        customResponse(true, res, 200, 'Modelos encontrados', allModels);
      }
      customResponse(false, res, 404, 'No se encontraron modelos', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * Method to find one model
   * @param res
   * @param id model id
   * @returns
   */
  async findOne(res:Response, id: number) {
    try {
      const model = await this.modelModel.findOne({
        where: {
          id,
        },
      });
      if (model) {
        customResponse(true,res, 200, 'Modelo encontrado', model);
      }
      customResponse(false,res, 404, 'Modelo no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * Method to update a model
   * @param res
   * @param id model id
   * @param updateModelDto data to update a model
   * @returns
   */
  async update(res:Response,id: number, updateModelDto: UpdateModelDto) {
    try {
      //find model
      const model = await this.modelModel.findOne({
        where: {
          id,
        },
      });
      if (model) {
        //update model
        const updatedModel = await this.modelModel.update(updateModelDto, {
          where: {
            id,
          },
        });
        customResponse(true,res, 200, 'Modelo actualizado', updatedModel);
      }
      customResponse(false,res, 404, 'Modelo no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * Method to remove a model
   * @param res
   * @param id model id
   * @returns
   */
  async remove(res:Response,id: number) {
    try {
      const model = await this.modelModel.findOne({
        where: {
          id,
        },
      });
      if (model) {
        await model.destroy();
        customResponse(true,res, 200, 'Modelo eliminado', null);
      }
      customResponse(false,res, 404, 'Modelo no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }

  /**
   * Method to find one model by modelName
   * @param res
   * @param modelName model name
   * @returns
   */
  async findByModelName(res:Response,modelName: string) {
    console.log('modelName', modelName);
    try {
      const model = await this.modelModel.findAll(
        {
          where: {
            modelName: {
              [Op.like]: `%${modelName}%`,
            },
          },
        },
      );
      if (model) {
        customResponse(true,res, 200, 'Modelo encontrado', model);
      }
      customResponse(false,res, 404, 'Modelo no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(error);
    }
  }
}
