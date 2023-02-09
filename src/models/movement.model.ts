import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

enum statusTypes {
    CANCELLED = 'cancelled',
    APPROVED = 'approved', 
    DRAFTED = 'drafted', 
    PROCESS_TO_CONFIRM = 'process to confirm', 
    EMITTED = 'emitted',
    DELIVERED = 'delivered', 
    PARTIALLY_DELIVERED = 'partially_delivered', 
  }

@Entity('movements')
export class MovementModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column({
        type: 'enum',
        enum: statusTypes,
        default: statusTypes.PROCESS_TO_CONFIRM
      })
      status: statusTypes

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
