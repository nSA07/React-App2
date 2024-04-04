import { List } from '@lists/entities/list.entity';
import { History } from '@history/entities/history.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tasks } from '@tasks/entities/task.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({ name: 'board' })
  id: number;

  @Column({ name: 'board_name' })
  boardName: string;

  @OneToMany(() => List, (list) => list.board)
  lists: List[];

  @OneToMany(() => History, (history) => history.board)
  history: History[];

  @OneToMany(() => Tasks, (tasks) => tasks.board)
  tasks: Tasks[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
