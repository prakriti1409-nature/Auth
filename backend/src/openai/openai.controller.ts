import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Post('suggest')
  async suggest(@Body('prompt') prompt: string) {
    const result = await this.openaiService.suggestCelebrities(prompt);
    return { suggestions: result };
  }

  @Post('ask')
  async ask(@Body('prompt') prompt: string) {
    const response = await this.openaiService.getChatCompletion(prompt);
    return { response };
  }

  @Post('fill-celebrity')
  async fillCelebrity(@Body('name') name: string) {
    const data = await this.openaiService.getCelebrityDetails(name);
    if (!data) throw new BadRequestException('Could not fetch details');
    return { profile: data };
  }
}
