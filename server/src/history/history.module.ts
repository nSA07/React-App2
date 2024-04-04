import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { History } from './entities/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '@lists/entities/list.entity';
import { ListsService } from '@lists/lists.service';

@Module({
  imports: [TypeOrmModule.forFeature([History, List])],
  controllers: [HistoryController],
  providers: [HistoryService, ListsService],
  exports: [HistoryService],
})
export class HistoryModule {}
