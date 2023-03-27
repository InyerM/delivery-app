import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Shop } from "./shop.entity"
import { ReviewEntity } from "@detabases/common/entities/review.entity"

@Entity({ name: "ShopReview" })
export class ShopReview extends ReviewEntity {
  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  @JoinColumn({ name: "shopId" })
  shop: Shop

  @Column({ name: "shopId" })
  shopId: string
}
