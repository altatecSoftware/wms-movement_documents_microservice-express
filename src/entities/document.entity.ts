import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
  DeleteDateColumn, OneToOne, JoinColumn, OneToMany
} from "typeorm";
import { DetailEntity } from "./detail.entity";
import { DocumentSignatureEntity } from "./document_signature.entity";
import { InboundOrderEntity } from "./inbound_order.entity";
import { MovementEntity } from "./movement.entity";
import { OutboundOrderEntity } from "./outbound_order.entity";


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

  @OneToOne(() => InboundOrderEntity, { nullable: true })
  @JoinColumn({ name: 'inbound_order_id' })
  public inbound_order_id: InboundOrderEntity;

  @OneToOne(() => OutboundOrderEntity, { nullable: true })
  @JoinColumn({ name: 'outbound_order_id' })
  public outbound_order_id: OutboundOrderEntity;

  @OneToMany(() => DetailEntity, (detail: DetailEntity) => detail.document_id)
  public detail_id: DetailEntity[];

  @OneToMany(() => DocumentSignatureEntity, (document_signature: DocumentSignatureEntity) => document_signature.document_id)
  public document_signature_id: DocumentSignatureEntity[];

  @OneToMany(() => MovementEntity, (movement: MovementEntity) => movement.document_id)
  public movement_id: MovementEntity[];

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}