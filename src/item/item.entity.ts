import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable} from 'typeorm'
import { UserEntity } from 'src/user/user.entity'
import { StateEntity } from 'src/state/state.entity'

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn() 
    id: string

    @Column('varchar')
    name: string

    @Column('numeric')
    statesId: string

    @Column('numeric')
    usersId: string

    @ManyToOne(type => UserEntity, user => user.items)
    user: UserEntity;

    //@ManyToOne(type => StateEntity, state => state.id)
    //states: StateEntity;
}
