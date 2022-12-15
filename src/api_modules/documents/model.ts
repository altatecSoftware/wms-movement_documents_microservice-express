import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

enum orderTypes {
  ENTRY = 'entry',
  EXIT = 'exit',
  PURCHASE = 'purshase',
  SALE = 'sale',
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
  status: orderTypes;

  @Column({ nullable: false })
  order_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
