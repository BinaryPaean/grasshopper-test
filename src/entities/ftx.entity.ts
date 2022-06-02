import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Ftx {
	@PrimaryGeneratedColumn({type: 'integer'})
	UserID: number

	@Column({type: 'varchar'})
	FirstName: string

	@Column({type: 'varchar'})
	LastName: string

	@Column({type: 'varchar'})
	StreetAddress: string

	@Column({type: 'varchar', nullable: true })
	StreetAddress2: string

	@Column({type: 'varchar'})
	City: string

	@Index()
	@Column({type: 'varchar'})
	State: string

	@Column({type: 'varchar'})
	Zip: string

	@Index()
	@Column({type: 'numeric'})
	EntityID: number

	@Column()
	AccountNumber: number

	@Column()
	TransactionID: number

	@Column({type: 'date'})
	Timestamp: string
	
}