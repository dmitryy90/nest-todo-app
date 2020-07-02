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

	//@UseGuards(JwtAuthGuard)
	@Get('name/:id')
	getItemName( @Param('id', ParseIntPipe) id: number ) {
  	return this.service.getItemName(id);
	}

	//@UseGuards(JwtAuthGuard)
	@Get('data/:id')
	getItemData( @Param('id', ParseIntPipe) id: number ) {
		const data = {name: '', state: '', user: ''};
		const p = Promise.all([
			this.service.getItemName(id),
			this.service.getStateName(id),
			this.service.getUserName(id)
		]).then(
			([name, state, user]) => {
			data.name = name;
			data.state = state;
			data.user = user;
			return data;
		})
  	return p;
	}
}
