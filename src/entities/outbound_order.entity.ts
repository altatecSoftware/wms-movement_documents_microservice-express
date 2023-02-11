import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('outbound_orders')
export class OutboundOrderEntity extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column('uuid')
    origin_warehouse: string

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