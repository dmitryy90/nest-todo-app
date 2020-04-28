import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { ItemEntity } from './item.entity'
import { UserEntity } from '../user/user.entity'

@Injectable()
export class ItemService extends TypeOrmCrudService<ItemEntity> {
    constructor (@InjectRepository(ItemEntity) repo) {
		super(repo)
	}

	public async getItemsByUser(id) {
		const user: UserEntity = await UserEntity.findOne({where: {id: id}, relations: ['items']});
		return user.items;
	}
}
