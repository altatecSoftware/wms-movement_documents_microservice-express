import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class InboundOrderModel extends BaseEntity {
    @PrimaryColumn('uuid')
    id: string

    @Column()
    destination_warehouse: string

    @Column()
    delivered_by: string 

    @Column()
    received_by: string 
}