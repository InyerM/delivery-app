import { AbstractEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { UserDefault } from "./user-default.entity"

@Entity({ name: "Shop" })
export class Shop extends AbstractEntity {
  @OneToOne(() => UserDefault, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: UserDefault

  @Column({ name: "userId" })
  userId: string

  @Column({ name: "name", type: "varchar", length: 50 })
  name: string

  @Column({ name: "description", type: "varchar", length: 255 })
  description: string

  @Column({ name: "deliveryEstimatedTime", type: "varchar", length: 20, nullable: true })
  deliveryEstimatedTime: string

  @Column({ name: "productType", type: "varchar" })
  productType: number
}
