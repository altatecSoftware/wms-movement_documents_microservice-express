import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

enum OrderPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high"
}

@Entity()
export class EntryOrder {
  @PrimaryGeneratedColumn('uuid') //PK
  id: string

  @Column()
  area_id: string

  @Column({
    type: 'enum',
    enum: OrderPriority,
    default: OrderPriority.LOW,
  })
  priority: OrderPriority

  @Column()
  origin: string

  @Column()
  description: string

  @Column()
  requested_by: string 

  @Column()
  approved_by: string 

  @Column()
  delivered_by: string 

  @Column()
  delivery_signature: string

  @Column()
  warehouse_manager: string 

  @Column()
  received_by: string 

  @Column()
  vehicle: string 

  @Column()
  license_plate: string 

  @Column()
  Observations: string 

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
