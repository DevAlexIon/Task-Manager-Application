import { Boards } from '../../boards/entity/boards.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: number;
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;
  @Exclude({ toPlainOnly: true })
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  username: string;

  @OneToMany(() => Boards, (board) => board.owner, { eager: true })
  boards: Boards[];

  @ManyToMany(() => Boards, (board) => board.members, {
    cascade: true,
  })
  @JoinTable()
  board: Boards[];
}
