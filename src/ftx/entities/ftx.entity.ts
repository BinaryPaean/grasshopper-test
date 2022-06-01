import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Ftx {
	@PrimaryGeneratedColumn({type: 'numeric'})
	UserID: number

	@Column({type: 'varchar'})
	FirstName: string

	@Column({type: 'varchar'})
	LastName: string

	@Column({type: 'varchar'})
	StreetAddress: string

	@Column({type: 'varchar'})
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
	TransactionId: number

	@Column({type: 'date'})
	Timestamp: string
	
}