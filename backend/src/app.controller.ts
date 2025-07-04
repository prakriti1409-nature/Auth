// src/app.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { OpenAIService } from './openai/openai.service';

@Controller()
export class AppController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('ask')
  async askQuestion(@Query('q') query: string) {
    const response = await this.openaiService.getChatCompletion(query);
    return { response };
  }
}
