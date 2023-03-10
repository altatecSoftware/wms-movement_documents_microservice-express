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

    @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.document_signatures, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    @JoinColumn({ name: 'document_id' })
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