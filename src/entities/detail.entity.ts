import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
    DeleteDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from "./document.entity";

@Entity('details')
export class DetailEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column('numeric')
    public unit_price: number

    @Column('numeric')
    public total_price: number

    @Column('integer')
    public quantity: number

    @Column('integer', { nullable: true })
    public pending_quantity: number

    @Column('uuid')
    public inventory_id: string

    @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.detail_id)
    @JoinColumn({ name: 'document_id' })
    public document_id: DocumentEntity;

    @Column('uuid')
    public good_id: string

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public updated_at: Date

    @DeleteDateColumn()
    public deleted_at: Date
}