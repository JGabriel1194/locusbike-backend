import { CanActivate, ExecutionContext, Injectable,UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request, json } from "express";
import { IS_PUBLIC_KEY } from "./auth.decorator";

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
        console.log(token);
        if(!token) throw new UnauthorizedException('No estas autorizado')        
        
        try {
            const payload = this.jwtService.verifyAsync(
                token,{
                    secret: process.env.JWT_SECRET,
                });
            request.user = payload;
            return true;
        } catch (error) {
            throw new UnauthorizedException('No estas autorizado');
        }
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}