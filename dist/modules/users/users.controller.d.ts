import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Response } from "express";
import { PasswordDto } from './dto/password.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: UserDto, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(res: Response, id: string): Promise<void>;
    update(res: Response, id: string, updateUserDto: UserDto): Promise<void>;
    remove(res: Response, id: string): Promise<void>;
    updatePassword(res: Response, id: string, password: PasswordDto): Promise<void>;
}
