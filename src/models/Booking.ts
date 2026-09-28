import mongoose, { Schema, Document, Model } from "mongoose";
import type { BookingStatus, ServiceType } from "@/types/booking";

export type { BookingStatus, ServiceType };

export interface IBooking extends Document {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: ServiceType;
  appointmentDate: Date;
  appointmentTime: string;
  notes?: string;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    clientName: { type: String, required: true, trim: true },
    clientEmail: { type: String, required: true, trim: true, lowercase: true },
    clientPhone: { type: String, required: true, trim: true },
    service: {
      type: String,
      enum: [
        "general-checkup",
        "teeth-cleaning",
        "root-canal",
        "dental-implant",
        "teeth-whitening",
        "braces",
        "emergency",
      ],
      required: true,
    },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

BookingSchema.index({ clientName: "text", clientEmail: "text", clientPhone: "text" });
BookingSchema.index({ status: 1, appointmentDate: -1 });

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
