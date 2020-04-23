import { Controller, Get, Body, ParseIntPipe, Post, Put, Delete, Query, Param} from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { ItemService } from './item.service'
import { ItemEntity } from './item.entity'
@Crud({
	model: {
		type: ItemEntity
	},
	params: {
		id: {
			field: 'id',
			type: 'number',
			primary: true
		}
	}
})
@Controller('item')
export class ItemController {
	constructor (public service: ItemService) {}

	@Get('todo')
	async getItems(userId: number, @Query() query): Promise<any> {
		console.log(userId);
	  return await this.service.find({ relations: ['user'] });
	}

}
