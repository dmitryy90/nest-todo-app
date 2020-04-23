import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BaseEntity } from 'typeorm'
import { ItemEntity } from 'src/item/item.entity'

@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: string

    @Column('varchar')
    name: string
    
    @Column('varchar')
    password: string

    @OneToMany(type => ItemEntity, item => item.user)
    items: ItemEntity[];
}
