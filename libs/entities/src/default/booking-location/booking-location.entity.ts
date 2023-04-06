import { BaseEntity } from "@app/entities/abstract";
import { Column, Entity } from "typeorm";

@Entity({ name: "BookingLocation" })
export class BookingLocation extends BaseEntity {
  @Column({ name: "userLocation", type: "text" })
  location: string;

  @Column({ name: "lat", type: "float" })
  lat: number;

  @Column({ name: "lng", type: "float" })
  lng: number;
}
