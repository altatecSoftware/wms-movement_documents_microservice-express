import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
    DeleteDateColumn, OneToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from './document.entity';

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

    @OneToOne(() => DocumentEntity, (document: DocumentEntity) => document.inbound_order)
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