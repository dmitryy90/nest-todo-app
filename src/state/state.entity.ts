import { Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'
import { ItemEntity } from 'src/item/item.entity';

@Entity('states')
export class StateEntity extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: string

    @Column('varchar')
    name: string
}