// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';

export const typeOrmConfigFactory = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get<string>('DB_HOST'),
  port: parseInt(config.get<string>('DB_PORT') || '5432', 10),
  username: config.get<string>('DB_USERNAME'),
  password: config.get<string>('DB_PASSWORD'),
  database: config.get<string>('DB_DATABASE'),
  entities: [User],
  synchronize: true,
  logging: true,
});
