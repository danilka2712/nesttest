import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('createChat')
  async create(
    @MessageBody()
    createChatDto: CreateChatDto,
  ) {
    const message = await this.chatService.create(createChatDto);
    await this.server.emit('message', message);
    return message;
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll();
  }

  @SubscribeMessage('findOneChat')
  async findOne(@MessageBody() updateChatDto: UpdateChatDto) {
    return await this.chatService.findOne(updateChatDto.id);
  }

  @SubscribeMessage('updateChat')
  async update(@MessageBody() updateChatDto: UpdateChatDto) {
    const update = await this.chatService.update(updateChatDto.id);
    this.server.emit('update', update);
    return update;
  }
}
