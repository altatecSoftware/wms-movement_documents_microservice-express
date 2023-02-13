import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


enum documentTypes {
    INBOUND_ORDER = 'inbound_order',
    OUTBOUND_ORDER = 'outbound_order',  
  }

@Entity('documents')
export class DocumentEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('smallint')
    priority: number

    @Column('text')
    description: string 

    @Column('text')
    delivery_signature: string

    @Column('text')
    received_signature: string 

    @Column('text', {nullable: true})
    observations: string 

    @Column('character varying', {length: 200 })
    vehicle: string

    @Column('character varying', {length: 30 })
    license_plate: string

    @Column({
        type: 'enum',
        enum: documentTypes,
      })
      document_type: documentTypes

    @Column('uuid')
    contact_id: string 

    @Column('uuid', {nullable: true})
    inbound_order_id: string 

    @Column('uuid', {nullable: true})
    outbound_order_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}