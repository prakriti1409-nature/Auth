import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude() // ✅ Hides password when transforming the object
  @Column()
  password: string;
}
