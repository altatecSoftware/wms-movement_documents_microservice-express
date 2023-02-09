import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class DocumentModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column("smallint")
    priority: number

    @Column('text')
    description: string 

    @Column('text')
    delivery_signature: string

    @Column('text')
    received_signature: string 

    @Column('text')
    observations: string 

    @Column('character varying', { length: 200 })
    vehicle_character: string

    @Column('character varying', { length: 30 })
    license_plate: string

    @Column('character varying', { length: 50 })
    document_type: string

    @Column('uuid')
    contact_id: string 

    @Column('uuid')
    inbound_order_id: string 

    @Column('uuid')
    outbound_order_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}