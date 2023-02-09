import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('details')
export class DetailModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column('uuid', {nullable: false})
    inventory_id: string 

    @Column('numeric', {nullable: false})
    unit_price: number

    @Column('numeric', {nullable: false})
    total_price: number

    @Column('integer', {nullable: false})
    quantity: number

    @Column('integer', {nullable: false})
    pending_quantity: number
    
    @Column('uuid', {nullable: false})
    document_id: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}