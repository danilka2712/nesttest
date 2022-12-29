import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ChatModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
