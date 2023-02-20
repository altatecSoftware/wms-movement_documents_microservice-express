import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
    DeleteDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from "./document.entity";

@Entity('details')
export class DetailEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('numeric')
    unit_price: number

    @Column('numeric')
    total_price: number

    @Column('integer')
    quantity: number

    @Column('integer', { nullable: true })
    pending_quantity: number

    @Column('uuid')
    inventory_id: string

    @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.details, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    @JoinColumn({ name: 'document_id' })
    document_id: DocumentEntity;

    @Column('uuid')
    good_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}