import {MigrationInterface, QueryRunner} from "typeorm";

export class seed9994102531012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO ftx ("UserID","FirstName","LastName","StreetAddress","StreetAddress2","City","State","Zip","EntityID","AccountNumber","TransactionID","Timestamp") VALUES (6435,'Obi','Kenobi','200 5th Ave',NULL,'New York','NY','10010',44,043213213,1001,'2022-01-03')`)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete * from ftx WHERE UserID is 6435`)
    }

}
