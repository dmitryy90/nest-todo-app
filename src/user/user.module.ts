import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
