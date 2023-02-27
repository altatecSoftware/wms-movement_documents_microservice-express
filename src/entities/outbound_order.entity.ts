import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
    DeleteDateColumn, OneToOne
} from "typeorm";
import { DocumentEntity } from "./document.entity";

@Entity('outbound_orders')
export class OutboundOrderEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('uuid')
    origin_warehouse_id: string

    @Column('uuid')
    delivered_by: string

    @Column('uuid')
    received_by: string

    @OneToOne(() => DocumentEntity, (document: DocumentEntity) => document.outbound_order)
    document_id: DocumentEntity;

    @Column('uuid', { nullable: true })
    user_id: string

    @Column('uuid', { nullable: true })
    root_user_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}