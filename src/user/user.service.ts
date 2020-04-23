import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
    constructor (@InjectRepository(UserEntity) repo) {
		super(repo)
	}

	public async getItemsByUser(id) {
		const user: UserEntity = await UserEntity.findOne({where: {id: id}, relations: ['items']});
		console.log(user);
		return user.items;
	}

	public async findOneUser(username: string) {
		return await UserEntity.findOne({where: {name: username}});
	}
}
