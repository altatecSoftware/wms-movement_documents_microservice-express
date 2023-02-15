import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
  DeleteDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from "./document.entity";

enum statusTypes {
  CANCELLED = 'cancelled',
  APPROVED = 'approved',
  DRAFTED = 'drafted',
  PROCESS_TO_CONFIRM = 'process to confirm',
  EMITTED = 'emitted',
  DELIVERED = 'delivered',
  PARTIALLY_DELIVERED = 'partially delivered',
}

@Entity('movements')
export class MovementEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'enum',
    enum: statusTypes,
    default: statusTypes.PROCESS_TO_CONFIRM
  })
  status: statusTypes

  @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.movement_id)
  @JoinColumn({ name: 'document_id' })
  public document_id: DocumentEntity;

  @Column('uuid')
  area_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

