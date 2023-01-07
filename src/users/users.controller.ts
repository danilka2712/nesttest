import {
  Controller,
  Put,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { getUser } from 'src/auth/decorators/user.decorator';
import { prisma, User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@getUser() user: User) {
    return user;
  }
  @UseGuards(JwtGuard)
  @Post(':id')
  async create(
    @Param('id') id: number,
    @Body() prisma: Prisma.UserUpdateInput,
  ) {
    return await this.usersService.create(id, prisma);
  }
}
