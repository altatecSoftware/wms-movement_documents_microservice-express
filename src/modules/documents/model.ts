import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

enum orderTypes {
  ENTRY     = 'entry_order',
  DEPARTURE = 'departure_order'
}

enum orderPriority {
  LOW    = 'low', 
  MEDIUM = 'medium', 
  HIGH   = 'high'
}

@Entity()
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false })
  public contact_id: string;

  @Column({
    type: 'enum',
    enum: orderTypes,
    nullable: false,
  })
  public document_type: orderTypes;

  @Column()
  public warehouse_manager: string

  @Column({
    type: 'enum',
    enum: orderPriority,
    default: 'low',
    nullable: false,
  })
  public priority: orderPriority;

  @Column({ nullable: false })
  public petitioner: string;

  @Column({ nullable: false })
  public approved_by: string;

  @Column({ nullable: false })
  public description: string;

  @Column({ nullable: false })
  public delivery_signature: string;

  @Column({ nullable: false })
  public received_signature: string;

  @Column({ nullable: true })
  public entry_order: string;

  @Column({ nullable: true })
  public departure_order: string;

  @Column({ nullable: false })
  public stock_card: string;

  @Column({ nullable: false })
  public Observation: string;

  @Column({ nullable: false })
  public vehicle: string;

  @Column({ nullable: false })
  public license_plate: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;

  @DeleteDateColumn()
  public deleted_at: Date;
}
