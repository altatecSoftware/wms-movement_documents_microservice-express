import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class EntryOrder extends BaseEntity{
  @PrimaryGeneratedColumn('uuid') 
  public id: string

  @Column({nullable: false})
  public origin_warehouse: string 

  @Column({nullable: false})
  public delivered_by: string 

  @Column({nullable: false})
  public received_by: string 

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;

  @DeleteDateColumn()
  public deleted_at: Date;

}
