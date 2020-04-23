import { Controller, ParseIntPipe, Body, Get, UseGuards } from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { UserService } from './user.service'
import { UserEntity } from './user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Crud({
	model: {
		type: UserEntity
	},
	params: {
		id: {
			field: 'id',
			type: 'number',
			primary: true
		}
	}
})
@Controller('users')
export class UserController {
	constructor (public service: UserService) {}

	@Get('itemsByUser')
	getItemsByUser( @Body('userID', ParseIntPipe) userID: number ) {
		console.log(userID);
  		return this.service.getItemsByUser(userID);
	}
}
