import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { User } from "./entities/user.entity";
import { hashPassword} from 'src/helpers/password';
import { customResponse, badResponse } from 'src/helpers/customResponses';
import { Response } from 'express';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  /**
   * method to create a new user
   * @param res
   * @param createUserDto data to create a new user
   * @returns
   */
  async create(res: Response, createUserDto: UserDto) {
    try {
      //Verify if user exist
      const existUser = await this.userModel.findOne({
        where: {
          [Op.or]: [
            { userEmail: createUserDto.userEmail },
            { userCedula: createUserDto.userCedula },
          ],
        },
      });
      if (existUser) {
        return customResponse(false,res, 400, 'Usuario ya registrado', null);
      }

      // If not exist, we create the user
      const password = await hashPassword(createUserDto.userPassword);
      createUserDto = {
        ...createUserDto,
        userAddres: createUserDto.userAddres,
        userPassword: password,
      };
      const newUser = await this.userModel.create(createUserDto);
      return customResponse(true,res, 201, 'Usuario creado', newUser);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  /**
   * Method to find all users
   * @returns
   */
  async findAll(res: Response) {
    try {
      const allUsers = await this.userModel.findAll();

      if (allUsers.length > 0) {
        return customResponse(false,res, 200,'Usuarios encontrados', allUsers);
      }
      return customResponse(false,res, 404,'No hay usuarios registrados', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  /**
   * Method to find one user by id
   * @param id - user id
   * @returns
   */
  async findOne(res: Response, id: number) {
    try {
      const user = await this.userModel.findOne({ where: { id } });
      if (user) {
        return customResponse(true,res, 200, 'Usuario encontrado', user);
      }
      return customResponse(false,res, 404, 'Usuario no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  /**
   * Method to find one user by userName
   * @param userName
   * @returns
   */
  async findOneByUserName(res: Response, userName: string) {
    try {
      const user = await this.userModel.findOne({ where: { userName } });
      if (user) {
        return customResponse(true,res, 200, 'Usuario encontrado', user);
      }
      return customResponse(false,res, 404, 'Usuario no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  /**
   * Method to find one user by userEmail, used in auth
   * @param userEmail
   * @returns
   */
  async findByEmail(res: Response, userEmail: string) {
    try {
      const user = await this.userModel.findOne({ where: { userEmail } });
      if (user) {
        return customResponse(true,res, 200, 'Usuario encontrado', user);
      }
      return customResponse(false,res, 404, 'Usuario no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  async update(res: Response, id: number, updateUserDto: UserDto) {
    try {
      const user = await this.userModel.findOne({ where: { id } });
      if (user) {
        await user.update(updateUserDto);
        return customResponse(true,res, 200, 'Usuario actualizado', user);
      }
      return customResponse(false,res, 404, 'Usuario no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }

  async remove(res: Response, id: number) {
    try {
      const user = this.userModel.findOne({ where: { id } });
      if (user) {
        this.userModel.destroy({ where: { id } });
        return customResponse(true,res, 200, 'Usuario eliminado', null);
      }
      return customResponse(false,res, 404, 'Usuario no encontrado', null);
    } catch (error) {
      console.log('ERROR ----->', error);
      return badResponse(res);
    }
  }
}
