// src/celebrity/celebrity.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CelebrityService } from './celebrity.service';

@Controller('celebrity')
export class CelebrityController {
  constructor(private service: CelebrityService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(parseInt(id));
  }
}
