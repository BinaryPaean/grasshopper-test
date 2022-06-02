import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFtxTable1654195542863 implements MigrationInterface {
    name = 'CreateFtxTable1654195542863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ftx" ("UserID" numeric NOT NULL, "FirstName" character varying NOT NULL, "LastName" character varying NOT NULL, "StreetAddress" character varying NOT NULL, "StreetAddress2" character varying, "City" character varying NOT NULL, "State" character varying NOT NULL, "Zip" character varying NOT NULL, "EntityID" numeric NOT NULL, "AccountNumber" integer NOT NULL, "TransactionID" SERIAL NOT NULL, "Timestamp" date NOT NULL, CONSTRAINT "PK_9315e3decda165c7ca71898c4a5" PRIMARY KEY ("TransactionID"))`);
        await queryRunner.query(`CREATE INDEX "IDX_735ddb752f56b53b66ef4742f1" ON "ftx" ("UserID") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_735ddb752f56b53b66ef4742f1"`);
        await queryRunner.query(`DROP TABLE "ftx"`);
    }

}
