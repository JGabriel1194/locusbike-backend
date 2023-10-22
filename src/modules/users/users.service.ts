import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { hashPassword} from 'src/helpers/password';
import { customResponse, badResponse } from 'src/helpers/customResponses';
import { Response } from 'express';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}
  /**
   * method to create a new user
   * @param createUserDto 
   * @returns 
   */
  async create(createUserDto: CreateUserDto, res: Response) {
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
        return customResponse(res, 400, ['Usuario ya existe'], null);
      }

      // If not exist, we create the user
      const password = await hashPassword(createUserDto.userPassword);
      createUserDto = {
        ...createUserDto,
        userAddres: createUserDto.userAddres,
        userPassword: password,
      };
      const newUser = await this.userModel.create(createUserDto);
      return customResponse(res, 201, ['Usuario creado'], newUser);

    } catch (error) {
      console.log('ERROR ----->',error);
      return badResponse(res);
    }
  }

  /**
   * Method to find all users
   * @returns 
   */
  async findAll(res: Response) {
    const allUsers = await this.userModel.findAll();
    
    if (allUsers.length > 0) {
      return customResponse(res,200,['Usuarios encontrados'],allUsers);
    }
    return customResponse(res,404,['No hay usuarios registrados'],null);
    
  }

  /**
   * Method to find one user by id
   * @param id 
   * @returns 
   */
  async findOne(id: number) {
    const user = await this.userModel.findOne({ where: { id } });
    if(user) {
      return user;
    }
    return `Usuario no existe`;
    
  }

  /**
   * Method to find one user by userName
   * @param userName 
   * @returns 
   */
  async findOneByUserName(userName: string) {
    // Search user by userName
    const user = await this.userModel.findOne({ where: { userName } });
    return user ? user : null;
  }

  /**
   * Method to find one user by userEmail, used in auth
   * @param userEmail 
   * @returns 
   */
  async findByEmail(userEmail: string) {
    const user = await this.userModel.findOne({ where: { userEmail } });
    if(user) {
      return user;
    }
    return null
  }
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    
    const user = await this.userModel.findOne({ where: { id } });

    if (user) {
      await user.update(updateUserDto);
      return user;
    } 

    return `Usuario no existe`;
  }

  remove(id: number) {
    const user = this.findOne(id);
    if (user) {
      this.userModel.destroy({ where: { id } });
      return `Usuario eliminado`;
    }
    return `Usuario no existe`;
  }
}
