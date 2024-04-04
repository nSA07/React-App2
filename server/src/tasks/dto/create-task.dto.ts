import { List } from '@lists/entities/list.entity';
import { IsNotEmpty, IsString } from 'class-validator';
import { Board } from 'src/boards/entities/board.entity';

export class CreateTaskDto {
  id: number;

  @IsString()
  title: string;

  @IsNotEmpty()
  board: Board;

  @IsNotEmpty()
  list: List;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  priority: 'high' | 'medium' | 'low';
}
