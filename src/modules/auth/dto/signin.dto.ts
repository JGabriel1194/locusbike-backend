import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {

    @ApiProperty()
    userEmail: string;
    
    @ApiProperty()
    userPassword: string;
}
