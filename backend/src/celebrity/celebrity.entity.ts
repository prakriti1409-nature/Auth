// src/celebrity/celebrity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Celebrity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  profession: string;

  @Column()
  genre: string;

  @Column()
  country: string;

  @Column()
  fanbase: string;

  @Column('json', { nullable: true })
  socials: { Instagram?: string; YouTube?: string; Spotify?: string };

  @Column({ type: 'text', nullable: true })
  sampleSetlist: string;
}
