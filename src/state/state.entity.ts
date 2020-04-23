import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { ItemEntity } from 'src/item/item.entity';

@Entity('states')
export class StateEntity {
    @PrimaryGeneratedColumn() 
    id: string

    @Column('varchar')
    name: string
}