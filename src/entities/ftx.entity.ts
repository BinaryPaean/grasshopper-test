import { Exclude } from "class-transformer"
import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Ftx {
	@Index(["UserID", "State", "EntityID"], {unique: false})

	@Column({type: 'numeric'})
	UserID: number;

	@Column({type: 'varchar'})
	@Exclude()
	FirstName: string;

	@Column({type: 'varchar'})
	@Exclude()
	LastName: string;

	@Column({type: 'varchar'})
	@Exclude()
	StreetAddress: string;

	@Column({type: 'varchar', nullable: true })
	@Exclude()
	StreetAddress2: string;

	@Column({type: 'varchar'})
	@Exclude()
	City: string;

	@Exclude()
	@Column({type: 'varchar'})
	State: string;

	@Exclude()
	@Column({type: 'varchar'})
	Zip: string;

	@Column({type: 'numeric'})
	EntityID: number;

	@Column()
	AccountNumber: number;

	@PrimaryGeneratedColumn({type: 'integer'})
	TransactionID: number;

	@Column({type: 'date'})
	Timestamp: string;

  constructor(partial: Partial<Ftx>) {
    Object.assign(this, partial);
  }
	
}