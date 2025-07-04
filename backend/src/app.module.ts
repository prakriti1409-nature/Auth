// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigFactory } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { OpenAIModule } from './openai/openai.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { OpenAIService } from './openai/openai.service';
import { Celebrity } from './celebrity/celebrity.entity';
import { CelebrityModule } from './celebrity/celebrity.module';



@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'celebs',
      entities: [Celebrity],
      synchronize: true, // ❗ only in dev
    }),
    CelebrityModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfigFactory,
      inject: [ConfigService],
    }),
    UserModule,
    OpenAIModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [OpenAIService],
})
export class AppModule {}
