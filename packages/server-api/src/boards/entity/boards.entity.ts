import { UserEntity } from '../../users/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Boards {
  @PrimaryGeneratedColumn('uuid') id: number;

  @Column()
  name: string;

  @ManyToMany(() => UserEntity, (user) => user.boards)
  members: UserEntity[];

  @ManyToOne(() => UserEntity, (user) => user.id)
  owner: UserEntity;

  @CreateDateColumn()
  date: Date;
}
