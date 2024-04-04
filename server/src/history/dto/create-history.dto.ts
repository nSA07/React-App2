import { IsString } from 'class-validator';
import { Board } from 'src/boards/entities/board.entity';

export class CreateHistoryDto {
  @IsString()
  taskId: string;

  board: Board;

  changes: { [key: string]: string | Date }[];
}

export class ChangeValueDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  priority: string;

  @IsString()
  list: string;
}
