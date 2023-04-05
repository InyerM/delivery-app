import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string

  @CreateDateColumn({
    name: "createdAt",
    type: "timestamp",
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updatedAt",
    type: "timestamp",
  })
  updatedAt: Date
}
