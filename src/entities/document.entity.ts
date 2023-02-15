import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
  DeleteDateColumn, OneToOne, JoinColumn, OneToMany
} from "typeorm";
import { DetailEntity, DocumentSignatureEntity, InboundOrderEntity, MovementEntity, OutboundOrderEntity } from '.'


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

  @Column('text', { nullable: true })
  observations: string

  @Column('character varying', { length: 200 })
  vehicle: string

  @Column('character varying', { length: 30 })
  license_plate: string

  @Column({
    type: 'enum',
    enum: documentTypes,
  })
  document_type: documentTypes

  @Column('uuid')
  contact_id: string

  @OneToOne(() => InboundOrderEntity, (inboundOrder: InboundOrderEntity) => inboundOrder.document_id, { nullable: true, cascade: true })
  @JoinColumn({ name: 'inbound_order_id' })
  inbound_order: InboundOrderEntity;

  @OneToOne(() => OutboundOrderEntity, (outboundOrder: InboundOrderEntity) => outboundOrder.document_id, { nullable: true, cascade: true })
  @JoinColumn({ name: 'outbound_order_id' })
  outbound_order: OutboundOrderEntity;

  @OneToMany(() => DetailEntity, (detail: DetailEntity) => detail.document_id, { cascade: true })
  detail_id: DetailEntity[];

  @OneToMany(() => DocumentSignatureEntity, (document_signature: DocumentSignatureEntity) => document_signature.document_id, { cascade: true })
  document_signature_id: DocumentSignatureEntity[];

  @OneToMany(() => MovementEntity, (movement: MovementEntity) => movement.document_id, { cascade: true })
  movement_id: MovementEntity[];

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}