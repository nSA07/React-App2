import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private readonly listService: Repository<List>,
  ) {}

  async create(CreateListDto: CreateListDto) {
    const newList = {
      listName: CreateListDto.listName,
      board: { id: +CreateListDto.board },
    };

    return await this.listService.save(newList);
  }

  async findAll(id: number) {
    return await this.listService.find({
      where: {
        board: {
          id,
        },
      },
      order: {
        createAt: 'ASC',
      },
      relations: {
        board: true,
        tasks: true,
      },
    });
  }

  async findOne(id: number) {
    const list = await this.findList(id);

    if (!list) throw new NotFoundException('List not found');

    return list;
  }

  async update(id: number, UpdateListDto: UpdateListDto) {
    try {
      const list = await this.findList(id);
      if (!list) throw new NotFoundException('List not found!');
      return await this.listService.update(id, UpdateListDto);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async remove(id: number) {
    const list = await this.findList(id);
    if (!list) throw new NotFoundException('List not found!');
    return await this.listService.delete(id);
  }

  public async findList(id: number): Promise<List> {
    return await this.listService.findOne({
      where: {
        id,
      },
      relations: {
        board: true,
        tasks: true,
      },
    });
  }
}
