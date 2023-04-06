import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1680799999652 implements MigrationInterface {
  name = "Migration1680799999652";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."Order_orderstatus_enum" AS ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED', 'COMPLETED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "Order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "orderStatus" "public"."Order_orderstatus_enum" NOT NULL, "userId" uuid, "shopId" uuid, CONSTRAINT "PK_3d5a3861d8f9a6db372b2b317b7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "assingDeliveryAt"`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "refundId" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "assignDeliveryAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "isPaid" boolean NOT NULL DEFAULT false`);
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "isPaidForDelivery" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(`ALTER TABLE "Booking" ADD "isRefund" boolean NOT NULL DEFAULT false`);
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "expectedDeliveryTime" double precision NOT NULL`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."Booking_deliverytype_enum" AS ENUM('DELIVERY', 'PICKUP', 'IN_PLACE')`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "deliveryType" "public"."Booking_deliverytype_enum" NOT NULL DEFAULT 'IN_PLACE'`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "taxPercent" double precision NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "taxAmount" double precision NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "discountPercent" double precision NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD "discountAmount" double precision NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "orderId"`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "orderId" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD CONSTRAINT "UQ_039a05da36bf866a2154747ae3e" UNIQUE ("orderId")`,
    );
    await queryRunner.query(`ALTER TABLE "Booking" ALTER COLUMN "subtotal" SET DEFAULT '0'`);
    await queryRunner.query(`ALTER TABLE "Booking" ALTER COLUMN "total" SET DEFAULT '0'`);
    await queryRunner.query(
      `ALTER TABLE "Order" ADD CONSTRAINT "FK_cdc25a0a42e8f451020a26680b3" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Order" ADD CONSTRAINT "FK_2046634305c4cf2dd700f42ada1" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Booking" ADD CONSTRAINT "FK_039a05da36bf866a2154747ae3e" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Booking" DROP CONSTRAINT "FK_039a05da36bf866a2154747ae3e"`,
    );
    await queryRunner.query(`ALTER TABLE "Order" DROP CONSTRAINT "FK_2046634305c4cf2dd700f42ada1"`);
    await queryRunner.query(`ALTER TABLE "Order" DROP CONSTRAINT "FK_cdc25a0a42e8f451020a26680b3"`);
    await queryRunner.query(`ALTER TABLE "Booking" ALTER COLUMN "total" DROP DEFAULT`);
    await queryRunner.query(`ALTER TABLE "Booking" ALTER COLUMN "subtotal" DROP DEFAULT`);
    await queryRunner.query(
      `ALTER TABLE "Booking" DROP CONSTRAINT "UQ_039a05da36bf866a2154747ae3e"`,
    );
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "orderId"`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "orderId" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "discountAmount"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "discountPercent"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "taxAmount"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "taxPercent"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "deliveryType"`);
    await queryRunner.query(`DROP TYPE "public"."Booking_deliverytype_enum"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "expectedDeliveryTime"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "isRefund"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "isPaidForDelivery"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "isPaid"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "assignDeliveryAt"`);
    await queryRunner.query(`ALTER TABLE "Booking" DROP COLUMN "refundId"`);
    await queryRunner.query(`ALTER TABLE "Booking" ADD "assingDeliveryAt" TIMESTAMP`);
    await queryRunner.query(`DROP TABLE "Order"`);
    await queryRunner.query(`DROP TYPE "public"."Order_orderstatus_enum"`);
  }
}
