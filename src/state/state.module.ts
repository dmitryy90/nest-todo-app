import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './state.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StateController } from './state.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([ StateEntity ]) ],
  providers: [StateService],
  controllers: [StateController]
})
export class StateModule {}
