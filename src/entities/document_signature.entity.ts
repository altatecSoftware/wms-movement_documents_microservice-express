import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
    DeleteDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from "./document.entity";

@Entity('document_signatures')
export class DocumentSignatureEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    path: string

    @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.document_signature_id)
    @JoinColumn({ name: 'document_id' })
    public document_id: DocumentEntity;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}