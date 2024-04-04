import { List } from '@lists/entities/list.entity';
import { Board } from 'src/boards/entities/board.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn({ name: 'tasks' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: 'high' | 'medium' | 'low';

  @ManyToOne(() => List, (list) => list.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'list_id' })
  list: List;

  @ManyToOne(() => Board, (board) => board.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
