import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ChatsModule } from './chats/chats.module';
import * as mongoose from 'mongoose';

@Module({
  // isGlobal 속성을 true로 설정하면 다른 모듈에서
  // ConfigModule을 가져 올 필요가 없다.
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure() {
    const DEBUG = process.env.MODE === 'dev' ? true : false;
    mongoose.set('debug', DEBUG);
  }
}
