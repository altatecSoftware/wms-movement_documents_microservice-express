import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('details')
export class DetailModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string
    
    @Column('numeric')
    unit_price: number
    
    @Column('numeric')
    total_price: number
    
    @Column('integer')
    quantity: number
    
    @Column('integer', {nullable: true})
    pending_quantity: number
    
    @Column('uuid')
    inventory_id: string 
    
    @Column('uuid')
    document_id: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}