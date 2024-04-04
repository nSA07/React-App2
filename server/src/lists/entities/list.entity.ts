import { Tasks } from '@tasks/entities/task.entity';
import { Board } from 'src/boards/entities/board.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn({ name: 'list' })
  id: number;

  @Column({ name: 'list_name' })
  listName: string;

  @ManyToOne(() => Board, (board) => board.lists, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @OneToMany(() => Tasks, (tasks) => tasks.list)
  tasks: Tasks[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
