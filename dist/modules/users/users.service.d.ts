import { UserDto } from './dto/user.dto';
import { User } from "./entities/user.entity";
import { Response } from 'express';
import { PasswordDto } from './dto/password.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    create(res: Response, createUserDto: UserDto): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: number): Promise<void>;
    findOneByUserName(res: Response, userName: string): Promise<void>;
    findByEmail(res: Response, userEmail: string): Promise<void>;
    update(res: Response, id: number, updateUserDto: UserDto): Promise<void>;
    remove(res: Response, id: number): Promise<void>;
    updatePassword(res: Response, id: number, password: PasswordDto): Promise<void>;
}
