import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum orderTypes {
  ENTRY = 'entry_order',
  EXIT = 'exit_order',
  PURCHASE = 'purshase_order',
  SALE = 'sale_order',
}

enum statusProgress {
  PENDING = "pending",
  CREATED = "created", 
  DELETED = "deleted"
}

@Entity()
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  contact_id: string;

  @Column({
    type: 'enum',
    enum: orderTypes,
    nullable: false,
  })
  type: orderTypes;

  @Column({
    type: 'enum',
    enum: statusProgress,
    nullable: false,
  })
  status: statusProgress;

  @Column({ nullable: false })
  order_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
