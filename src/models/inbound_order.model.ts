import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class InboundOrderModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column('uuid')
    destination_warehouse: string

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