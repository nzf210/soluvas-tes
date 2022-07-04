import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop()
  nama: string;

  @Prop()
  phone_number: string;

  @Prop()
  jobdesk: string;

  @Prop()
  email: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);