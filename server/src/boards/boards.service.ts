import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardService: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const isUsed = await this.boardService.findBy({
      boardName: createBoardDto.boardName,
    });

    if (isUsed.length)
      throw new BadGatewayException('This board is already used');

    const newBoard = {
      boardName: createBoardDto.boardName,
    };

    return await this.boardService.save(newBoard);
  }

  async findAll() {
    return await this.boardService.find({
      relations: {
        lists: true,
      },
    });
  }

  async findOne(id: number) {
    const board = await this.findBoard(id);

    if (!board) throw new NotFoundException('Board not found');

    return board;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    try {
      const board = await this.findBoard(id);
      if (!board) throw new NotFoundException('Board not found!');
      return await this.boardService.update(id, updateBoardDto);
    } catch (error) {
      throw new BadRequestException('Board title is used');
    }
  }

  async remove(id: number) {
    const board = await this.findBoard(id);
    if (!board) throw new NotFoundException('Board not found!');
    return await this.boardService.delete(id);
  }

  public async findBoard(id: number): Promise<Board> {
    return await this.boardService.findOne({
      where: {
        id,
      },
      relations: {
        lists: true,
      },
    });
  }
}
