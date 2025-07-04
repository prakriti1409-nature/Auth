// src/openai/openai.module.ts
import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { OpenAIController } from './openai.controller';

@Module({
  providers: [OpenAIService],
  controllers: [OpenAIController],
})
export class OpenAIModule {}
