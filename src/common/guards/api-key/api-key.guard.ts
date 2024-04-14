import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  // Reflector class allows us to retrieve metadata within a specific context
  constructor(
    private readonly reflector: Reflector,
    private readonly configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler()); // Look up metadata by key, target method handler

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Authorization');
    // return authHeader === process.env.API_KEY; // TODO: utilize the ConfigService
    return authHeader === this.configService.get('API_KEY');
  }
}
