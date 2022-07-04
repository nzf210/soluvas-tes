import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './soluvas.controller';
import { ItemsService } from './suluvas.service';
import { Item, ItemSchema } from './schemas/soluvas.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule { }