import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('inbound_orders')
export class InboundOrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('uuid')
    destination_warehouse_id: string

    @Column('uuid')
    delivered_by: string

    @Column('uuid')
    received_by: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}