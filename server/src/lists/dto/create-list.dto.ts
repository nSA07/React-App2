import { IsNotEmpty, IsString } from 'class-validator';
import { Board } from 'src/boards/entities/board.entity';

export class CreateListDto {
  @IsString()
  listName: string;

  @IsNotEmpty()
  board: Board;
}
