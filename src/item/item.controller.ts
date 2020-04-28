import { Controller, Get, ParseIntPipe, Param, UseGuards} from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { ItemService } from './item.service'
import { ItemEntity } from './item.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
	@Get('todo')
	async getItems(userId: number): Promise<any> {
	  return await this.service.find({ relations: ['user'] });
	}

  @UseGuards(JwtAuthGuard)
	@Get('byUser/:userID')
	getItemsByUser( @Param('userID', ParseIntPipe) userID: number ) {
  	return this.service.getItemsByUser(userID);
	}
}
