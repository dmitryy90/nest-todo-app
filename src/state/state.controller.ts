import { Controller} from '@nestjs/common'
import { Crud } from '@nestjsx/crud'
import { StateService } from './state.service'
import { StateEntity } from './state.entity'
@Crud({
	model: {
		type: StateEntity
	},
	params: {
		id: {
			field: 'id',
			type: 'number',
			primary: true
		}
	}
})
@Controller('states')
export class StateController {
	constructor (public service: StateService) {}
}
