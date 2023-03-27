import { AbstractEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { User } from "./user.entity"
import { Shop } from "./shop.entity"
import { BookingLocation } from "./booking-location.entity"
import { Driver } from "./driver.entity"
import { BookingStatusEnum, DistanceTypeEnum, PaymentStatusEnum } from "../enums/booking.enums"
import { CurrencyEnum } from "@common/enums"

@Entity({ name: "Booking" })
export class Booking extends AbstractEntity {
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User

  @Column({ name: "userId" })
  userId: string

  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  @JoinColumn({ name: "shopId" })
  shop: Shop

  @Column({ name: "shopId" })
  shopId: string

  @ManyToOne(() => Driver, (driver) => driver.id, { cascade: true })
  @JoinColumn({ name: "driverId" })
  driver: Driver

  @Column({ name: "driverId" })
  driverId: string

  // @OneToOne(() => Order, (order) => order.id, { cascade: true })
  // @JoinColumn({ name: "orderId" })
  // order: Order

  @Column({ name: "orderId" })
  orderId: string

  // @OneToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.id, { cascade: true })
  // @JoinColumn({ name: "paymentMethodId" })
  // paymentMethod: PaymentMethod

  @Column({ name: "paymentMethodId" })
  paymentMethodId: string

  // @OneToOne(() => Transaction, (transaction) => transaction.id, { cascade: true })
  // @JoinColumn({ name: "transactionId" })
  // transaction: Transaction

  @Column({ name: "transactionId" })
  transactionId: string

  // @OneToOne(() => PromCode, (promCode) => promCode.id, { cascade: true })
  // @JoinColumn({ name: "promCodeId" })
  // promCode: PromCode

  @Column({ name: "promCodeId" })
  promCodeId: string

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "userLocationId" })
  userLocation: BookingLocation

  @Column({ name: "userLocationId" })
  userLocationId: string

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "pickUpLocationId" })
  pickUpLocation: BookingLocation

  @Column({ name: "pickUpLocationId" })
  pickUpLocationId: string

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "dropOffLocationId" })
  dropOffLocation: BookingLocation

  @Column({ name: "dropOffLocationId" })
  dropOffLocationId: string

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "shopLocationId" })
  shopLocation: BookingLocation

  @Column({ name: "shopLocationId" })
  shopLocationId: string

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "driverLocationId" })
  driverLocation: BookingLocation

  @Column({ name: "driverLocationId" })
  driverLocationId: string

  @Column({
    name: "status",
    type: "enum",
    enum: BookingStatusEnum,
    default: BookingStatusEnum.PENDING,
  })
  status: BookingStatusEnum

  @Column({ name: "shopPreparationTime", type: "float", nullable: true })
  shopPreparationTime: number

  @Column({ name: "shopDistance", type: "float", nullable: true })
  shopDistance: number

  @Column({ name: "shopDuration", type: "float", nullable: true })
  shopDuration: number

  @Column({
    name: "distanceType",
    type: "enum",
    enum: DistanceTypeEnum,
    default: DistanceTypeEnum.KILOMETERS,
  })
  distanceType: DistanceTypeEnum

  @Column({ name: "bookingApprovedAt", type: "timestamp", nullable: true })
  bookingApprovedAt: Date

  @Column({ name: "bookingRejectedAt", type: "timestamp", nullable: true })
  bookingRejectedAt: Date

  @Column({ name: "bookingCancelledAt", type: "timestamp", nullable: true })
  bookingCancelledAt: Date

  @Column({ name: "assingDeliveryAt", type: "timestamp", nullable: true })
  assingDeliveryAt: Date

  @Column({ name: "bookingPickUpAt", type: "timestamp", nullable: true })
  bookingPickUpAt: Date

  @Column({ name: "bookingDropOffAt", type: "timestamp", nullable: true })
  bookingDropOffAt: Date

  @Column({ name: "totalDistance", type: "float" })
  totalDistance: number

  @Column({ name: "userServiceFare", type: "float", default: 0 })
  userServiceFare: number

  @Column({ name: "shopServiceFare", type: "float", default: 0 })
  shopServiceFare: number

  @Column({ name: "driverServiceFare", type: "float", default: 0 })
  driverServiceFare: number

  @Column({ name: "subtotal", type: "float" })
  subtotal: number

  @Column({ name: "total", type: "float" })
  total: number

  @Column({
    name: "paymentStatus",
    type: "enum",
    enum: PaymentStatusEnum,
    default: PaymentStatusEnum.PENDING,
  })
  paymentStatus: PaymentStatusEnum

  @Column({
    name: "currency",
    type: "enum",
    enum: CurrencyEnum,
    default: CurrencyEnum.COP,
  })
  currency: CurrencyEnum

  @Column({ name: "notes", type: "text", nullable: true })
  notes: string
}
