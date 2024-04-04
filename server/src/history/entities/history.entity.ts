import { Board } from 'src/boards/entities/board.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn({ name: 'history' })
  id: number;

  @Column()
  taskId: string;

  @Column('simple-json')
  changes: { [key: string]: string | Date }[];

  @ManyToOne(() => Board, (board) => board.lists, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'board_id' })
  board: Board;

  @CreateDateColumn()
  timestamp: Date;
}
