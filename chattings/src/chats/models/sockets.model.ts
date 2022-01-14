import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  id: false,
  timestamps: true,
  collection: 'sockets',
};

@Schema(options)
export class Socket extends Document {
  @Prop({ unique: true, required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  username: string;
}

export const socketSchema = SchemaFactory.createForClass(Socket);
