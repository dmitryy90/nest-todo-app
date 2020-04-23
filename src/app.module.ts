import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ItemEntity } from './item/item.entity'
import { ItemModule } from './item/item.module';
import { UserEntity } from './user/user.entity'
import { UserModule } from './user/user.module';
import { StateEntity } from './state/state.entity'
import { StateModule } from './state/state.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ItemEntity, ItemModule, UserEntity, UserModule, StateEntity, StateModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
