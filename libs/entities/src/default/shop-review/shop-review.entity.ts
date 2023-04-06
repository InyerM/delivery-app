import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Shop } from "../shop/shop.entity";
import { ReviewEntity } from "@app/entities/abstract";

@Entity({ name: "ShopReview" })
export class ShopReview extends ReviewEntity {
  @ManyToOne(() => Shop, (shop) => shop.id)
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ name: "shopId" })
  shopId: string;
}
