import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findMe(user: User) {
    return await this.prisma.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        Product: true,
      },
    });
  }

  async create(id: number, prisma: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: {
        id: Number(id),
      },
      data: prisma,
    });
  }
}
