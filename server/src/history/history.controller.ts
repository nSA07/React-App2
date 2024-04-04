import { Controller, Get, Param, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { GetHistoryFilterDto } from './dto/get-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  findAll(@Query() filterDto: GetHistoryFilterDto) {
    return this.historyService.findAll(filterDto);
  }

  @Get(':id')
  findAllById(@Param('id') id: string) {
    return this.historyService.findAllById(id);
  }
}
