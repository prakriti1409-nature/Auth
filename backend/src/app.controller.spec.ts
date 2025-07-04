// src/app.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { OpenAIService } from './openai/openai.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [OpenAIService], // Use OpenAIService instead of AppService
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
