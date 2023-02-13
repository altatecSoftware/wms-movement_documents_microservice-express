import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('document_signatures')
export class DocumentSignatureEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    path: string

    @Column('uuid')
    document_id: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}