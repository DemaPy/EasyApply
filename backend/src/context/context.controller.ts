import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContextService } from './context.service';

@Controller('context')
export class ContextController {
  constructor(private readonly contextService: ContextService) {}

  @Post()
  create(@Body() context) {
    return this.contextService.create(context);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.contextService.get(id);
  }

  @Get()
  getAll() {
    return this.contextService.getAll();
  }
}
