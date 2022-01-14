import { MongooseModule } from '@nestjs/mongoose';
import { ChatsGateway } from './chats.gateway';
import { Module } from '@nestjs/common';
import { Chatting, chattingSchema } from './models/chattings.model';
import { Socket as SocketModel, socketSchema } from './models/sockets.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chatting.name, schema: chattingSchema },
      { name: SocketModel.name, schema: socketSchema },
    ]),
  ],
  providers: [ChatsGateway],
})
export class ChatsModule {}
