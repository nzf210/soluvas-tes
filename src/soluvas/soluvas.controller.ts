import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-soluvas.dto';
import { Item } from './interfaces/soluvas.interfaces';
import { ItemsService } from './suluvas.service';

@Controller('soluvas')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemService.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemService.create(createItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Item> {
        return await this.itemService.delete(id);
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id) {
        return await this.itemService.update(id, updateItemDto);
    }

}
