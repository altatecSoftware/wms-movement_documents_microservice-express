import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
  DeleteDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { DocumentEntity } from "./document.entity";
import { statusTypes } from "../utils";

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

  @ManyToOne(() => DocumentEntity, (document: DocumentEntity) => document.movements, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})
  @JoinColumn({ name: 'document_id' })
  document_id: DocumentEntity;

  @Column('uuid')
  area_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

