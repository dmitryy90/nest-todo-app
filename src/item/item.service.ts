import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { ItemEntity } from './item.entity'
import { UserEntity } from '../user/user.entity'
import { StateEntity } from '../state/state.entity'

@Injectable()
export class ItemService extends TypeOrmCrudService<ItemEntity> {
    constructor (@InjectRepository(ItemEntity) repo) {
		super(repo)
	}

	public async getItemsByUser(id) {
		const user: UserEntity = await UserEntity.findOne({where: {id: id}, relations: ['items']});
		return user.items;
	}

	public async getItemName(id) {
		const item: ItemEntity = await this.findOne(id);
		return item.name;
	} 

	public async getItemUser(id) {
		const item: ItemEntity = await this.findOne(id);
		return item.usersId;
	} 

	public async getItemState(id) {
		const item: ItemEntity = await this.findOne(id);
		return item.usersId;
	} 

	public async getStateName(id) {
		const state: StateEntity = await StateEntity.findOne(await this.getItemState(id));
		return state.name;
	}

	public async getUserName(id) {
		const user: UserEntity = await UserEntity.findOne(await this.getItemUser(id));
		return user.name;
	}
}
