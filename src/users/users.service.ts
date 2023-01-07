import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(id: number, prisma: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: prisma,
    });
  }
}
