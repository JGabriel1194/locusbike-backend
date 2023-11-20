import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { IS_PUBLIC_KEY } from "./auth.decorator";
import { badResponse, customResponse } from "src/helpers/customResponses";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        // This will return true if the route is public
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY,[
            context.getHandler(),
            context.getClass(),
        ]);
        
        if (isPublic) {
            return true;
        }
        
        // If is not public, we will check if there is a token in the request
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        //console.log('Token---',token);
        
        if(!token){
            customResponse(false,request.res,401,'No estas autorizado',null);
            return false;
        }        
        
        try {
            const payload = this.jwtService.verifyAsync(
                token,{
                    secret: process.env.JWT_SECRET,
                });
            request.user = payload;
        } catch (error) {
           console.log('Error--->',error);
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}