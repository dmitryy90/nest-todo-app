import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemEntity } from './item.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ItemController } from './item.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([ ItemEntity ]) ],
  providers: [ItemService],
  controllers: [ItemController]
})
export class ItemModule {}
