import {MigrationInterface, QueryRunner} from "typeorm";

export class createFtxTable1654143888286 implements MigrationInterface {
    name = 'createFtxTable1654143888286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ftx" ("UserID" SERIAL NOT NULL, "FirstName" character varying NOT NULL, "LastName" character varying NOT NULL, "StreetAddress" character varying NOT NULL, "StreetAddress2" character varying NOT NULL, "City" character varying NOT NULL, "State" character varying NOT NULL, "Zip" character varying NOT NULL, "EntityID" numeric NOT NULL, "AccountNumber" integer NOT NULL, "TransactionId" integer NOT NULL, "Timestamp" date NOT NULL, CONSTRAINT "PK_735ddb752f56b53b66ef4742f16" PRIMARY KEY ("UserID"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fdeb4518c004c782f0d0d6defe" ON "ftx" ("State") `);
        await queryRunner.query(`CREATE INDEX "IDX_b6d62c55ca8857ffbf0c297902" ON "ftx" ("EntityID") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b6d62c55ca8857ffbf0c297902"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fdeb4518c004c782f0d0d6defe"`);
        await queryRunner.query(`DROP TABLE "ftx"`);
    }

}
