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
        price: createChatDto.price,
        services: createChatDto.services,
        category: createChatDto.category,
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
      include: {
        author: true,
      },
    });
  }

  async update(id: number, authorId: number) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        content: 'Выполнено',
        authorId,
      },
      include: {
        author: true,
      },
    });
  }
}
