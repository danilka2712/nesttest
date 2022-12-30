import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}
  async create(createChatDto: CreateChatDto) {
    return await this.prisma.product.create({
      data: {
        phone: createChatDto.phone,
        marka: createChatDto.marka,
        model: createChatDto.model,
        addressTo: createChatDto.addressTo,
        addressWhere: createChatDto.addressWhere,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany({
      include: {
        author: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        content: 'Выполнено',
        authorId: 1,
      },
    });
  }
}
