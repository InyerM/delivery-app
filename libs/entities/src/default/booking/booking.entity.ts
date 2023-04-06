import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Shop } from "../shop/shop.entity";
import { BookingLocation } from "../booking-location/booking-location.entity";
import { Driver } from "../driver/driver.entity";
import { BaseEntity } from "@app/entities/abstract/base-entity.entity";
import {
  BookingStatusEnum,
  DistanceTypeEnum,
  PaymentStatusEnum,
  CurrencyEnum,
  DeliveryTypeEnum,
} from "@app/shared/enums";
import { Order } from "../order/order.entity";

@Entity({ name: "Booking" })
export class Booking extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;

  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ name: "shopId" })
  shopId: string;

  @ManyToOne(() => Driver, (driver) => driver.id, { cascade: true })
  @JoinColumn({ name: "driverId" })
  driver: Driver;

  @Column({ name: "driverId" })
  driverId: string;

  @OneToOne(() => Order, (order) => order.id, { cascade: true })
  @JoinColumn({ name: "orderId" })
  order: Order;

  @Column({ name: "orderId" })
  orderId: string;

  // @OneToOne(() => PaymentMethod, (paymentMethod) => paymentMethod.id, { cascade: true })
  // @JoinColumn({ name: "paymentMethodId" })
  // paymentMethod: PaymentMethod

  @Column({ name: "paymentMethodId" })
  paymentMethodId: string;

  // @OneToOne(() => Transaction, (transaction) => transaction.id, { cascade: true })
  // @JoinColumn({ name: "transactionId" })
  // transaction: Transaction

  @Column({ name: "transactionId" })
  transactionId: string;

  // @OneToOne(() => PromCode, (promCode) => promCode.id, { cascade: true })
  // @JoinColumn({ name: "promCodeId" })
  // promCode: PromCode

  @Column({ name: "promCodeId" })
  promCodeId: string;

  // @OneToOne(() => Refund, (refund) => refund.id, { cascade: true })
  // @JoinColumn({ name: "refundId" })
  // refund: Refund

  @Column({ name: "refundId" })
  refundId: string;

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "userLocationId" })
  userLocation: BookingLocation;

  @Column({ name: "userLocationId" })
  userLocationId: string;

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "pickUpLocationId" })
  pickUpLocation: BookingLocation;

  @Column({ name: "pickUpLocationId" })
  pickUpLocationId: string;

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "dropOffLocationId" })
  dropOffLocation: BookingLocation;

  @Column({ name: "dropOffLocationId" })
  dropOffLocationId: string;

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "shopLocationId" })
  shopLocation: BookingLocation;

  @Column({ name: "shopLocationId" })
  shopLocationId: string;

  @OneToOne(() => BookingLocation, (bookingLocation) => bookingLocation.id, { cascade: true })
  @JoinColumn({ name: "driverLocationId" })
  driverLocation: BookingLocation;

  @Column({ name: "driverLocationId" })
  driverLocationId: string;

  @Column({
    name: "status",
    type: "enum",
    enum: BookingStatusEnum,
    default: BookingStatusEnum.PENDING,
  })
  status: BookingStatusEnum;

  @Column({ name: "shopPreparationTime", type: "float", nullable: true })
  shopPreparationTime: number;

  @Column({ name: "shopDistance", type: "float", nullable: true })
  shopDistance: number;

  @Column({ name: "shopDuration", type: "float", nullable: true })
  shopDuration: number;

  @Column({
    name: "distanceType",
    type: "enum",
    enum: DistanceTypeEnum,
    default: DistanceTypeEnum.KILOMETERS,
  })
  distanceType: DistanceTypeEnum;

  @Column({ name: "bookingApprovedAt", type: "timestamp", nullable: true })
  bookingApprovedAt: Date;

  @Column({ name: "bookingRejectedAt", type: "timestamp", nullable: true })
  bookingRejectedAt: Date;

  @Column({ name: "bookingCancelledAt", type: "timestamp", nullable: true })
  bookingCancelledAt: Date;

  @Column({ name: "assignDeliveryAt", type: "timestamp", nullable: true })
  assignDeliveryAt: Date;

  @Column({ name: "bookingPickUpAt", type: "timestamp", nullable: true })
  bookingPickUpAt: Date;

  @Column({ name: "bookingDropOffAt", type: "timestamp", nullable: true })
  bookingDropOffAt: Date;

  @Column({ name: "totalDistance", type: "float" })
  totalDistance: number;

  @Column({
    name: "paymentStatus",
    type: "enum",
    enum: PaymentStatusEnum,
    default: PaymentStatusEnum.PENDING,
  })
  paymentStatus: PaymentStatusEnum;

  @Column({
    name: "currency",
    type: "enum",
    enum: CurrencyEnum,
    default: CurrencyEnum.COP,
  })
  currency: CurrencyEnum;

  @Column({ name: "notes", type: "text", nullable: true })
  notes: string;

  @Column({ name: "isPaid", type: "boolean", default: false })
  isPaid: boolean;

  @Column({ name: "isPaidForDelivery", type: "boolean", default: false })
  isPaidForDelivery: boolean;

  @Column({ name: "isRefund", type: "boolean", default: false })
  isRefund: boolean;

  @Column({ name: "expectedDeliveryTime", type: "float" })
  expectedDeliveryTime: number;

  @Column({
    name: "deliveryType",
    type: "enum",
    enum: DeliveryTypeEnum,
    default: DeliveryTypeEnum.IN_PLACE,
  })
  deliveryType: DeliveryTypeEnum;

  @Column({ name: "taxPercent", type: "float", default: 0 })
  taxPercent: number;

  @Column({ name: "taxAmount", type: "float", default: 0 })
  taxAmount: number;

  @Column({ name: "discountPercent", type: "float", default: 0 })
  discountPercent: number;

  @Column({ name: "discountAmount", type: "float", default: 0 })
  discountAmount: number;

  @Column({ name: "userServiceFare", type: "float", default: 0 })
  userServiceFare: number;

  @Column({ name: "shopServiceFare", type: "float", default: 0 })
  shopServiceFare: number;

  @Column({ name: "driverServiceFare", type: "float", default: 0 })
  driverServiceFare: number;

  @Column({ name: "subtotal", type: "float", default: 0 })
  subtotal: number;

  @Column({ name: "total", type: "float", default: 0 })
  total: number;

  @BeforeInsert()
  async calculateFares() {
    this.total = this.subtotal + this.taxAmount - this.discountAmount;
  }
}
