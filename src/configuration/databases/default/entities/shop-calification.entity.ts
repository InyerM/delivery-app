import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { AbstractEntity } from "@detabases/common/entities"
import { Shop } from "./shop.entity"

@Entity({ name: "ShopCalification" })
export class ShopCalification extends AbstractEntity {
  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  @JoinColumn({ name: "shopId" })
  shop: Shop

  @Column({ name: "shopId" })
  shopId: string

  @Column({ name: "calification", type: "int" })
  calification: number

  @Column({ name: "comment", type: "varchar", length: 255 })
  comment: string
}
