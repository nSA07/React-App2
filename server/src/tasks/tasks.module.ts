import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './entities/task.entity';
import { HistoryService } from '@history/history.service';
import { History } from '@history/entities/history.entity';
import { List } from '@lists/entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks, History, List])],
  controllers: [TasksController],
  providers: [TasksService, HistoryService],
})
export class TasksModule {}
