import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export class DetailModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column('uuid')
    inventory_id: string 

    @Column('numeric')
    unit_price: number

    @Column('numeric')
    total_price: number

    @Column('integer')
    quantity: number

    @Column('integer')
    pending_quantity: number
    
    @Column('uuid')
    document_id: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}