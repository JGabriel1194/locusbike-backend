import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from './entities/brand.entity';
import { Op } from 'sequelize';
import { badResponse, customResponse } from 'src/helpers/customResponses';
import { Response } from 'express';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand)
    private brandModel: typeof Brand,
  ) {}

  /**
   * method to create a new brand
   * @param res
   * @param createBrandDto data to create a new brand
   * @returns
   */
  async create(res:Response, createBrandDto: CreateBrandDto) {
    try {
      //Verify if brand exist
      const existBrand = await this.brandModel.findOne({
        where: {
          [Op.or]: [
            { brandName: createBrandDto.brandName }
          ],
        },
      });
      if (existBrand) {
        customResponse(false,res, 400, 'Marca ya registrada', null);
      }

      // If not exist, we create the brand
      const newBrand = await this.brandModel.create(createBrandDto);
      customResponse(true,res, 201, 'Marca creada', newBrand);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to find all brands
   * @returns
   */
  async findAll(res:Response) {
    try {
      const allBrands = await this.brandModel.findAll();
      if (allBrands.length > 0) {
        customResponse(true,res, 200, 'Marcas encontradas', allBrands);
      }
      customResponse(false,res, 404, 'No se encontraron marcas', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to find one brand
   * @param res response
   * @param id brand id
   * @returns
   */
  async findOne(res:Response, id: number) {
    try {
      const brand = await this.brandModel.findByPk(id);
      if (brand) {
        customResponse(true,res, 200, 'Marca encontrada', brand);
      }
      customResponse(false,res, 404, 'Marca no encontrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
  }

  /**
   * Method to update a brand
   * @param id brand id
   * @param updateBrandDto data to update a brand
   * @returns
   */
  async update(res:Response, id: number, updateBrandDto: UpdateBrandDto) {
    try {
      const brand = await this.brandModel.findByPk(id);
      if (brand) {
        await brand.update(updateBrandDto);
        customResponse(true,res, 200, 'Marca actualizada', brand);
      }
      customResponse(false,res, 404, 'Marca no encontrada', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      badResponse(res);
    }
    
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
