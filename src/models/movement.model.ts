import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('movements')
export class MovementModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column('character varying', { length: 30 })
    status: string

    @Column('uuid')
    document_id: string 

    @Column('uuid')
    area_id: string 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}