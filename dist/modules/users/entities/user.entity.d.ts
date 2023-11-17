import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    userName: string;
    userEmail: string;
    userPassword: string;
    userCedula: string;
    userPhone: string;
    userImage: string;
    userAddres: string;
    isActive: boolean;
}
