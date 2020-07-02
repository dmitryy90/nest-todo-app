import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { StateEntity } from './state.entity'

@Injectable()
export class StateService extends TypeOrmCrudService<StateEntity> {
    constructor (@InjectRepository(StateEntity) repo) {
		super(repo)
	}

	public async getStateName(id) {
		const item: StateEntity = await this.findOne(id);
		return item.name;
	} 
}
