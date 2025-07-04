// src/celebrity/celebrity.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Celebrity } from './celebrity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CelebrityService {
  constructor(
    @InjectRepository(Celebrity)
    private repo: Repository<Celebrity>,
  ) {}

  create(data: Partial<Celebrity>) {
    const celeb = this.repo.create(data);
    return this.repo.save(celeb);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
}
