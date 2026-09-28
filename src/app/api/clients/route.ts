import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import { getSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    const matchStage: Record<string, unknown> = {};
    if (search) {
      matchStage.$or = [
        { clientName: { $regex: search, $options: "i" } },
        { clientEmail: { $regex: search, $options: "i" } },
        { clientPhone: { $regex: search, $options: "i" } },
      ];
    }

    const clients = await Booking.aggregate([
      ...(Object.keys(matchStage).length ? [{ $match: matchStage }] : []),
      {
        $group: {
          _id: "$clientEmail",
          clientName: { $first: "$clientName" },
          clientEmail: { $first: "$clientEmail" },
          clientPhone: { $first: "$clientPhone" },
          totalBookings: { $sum: 1 },
          lastBooking: { $max: "$appointmentDate" },
          statuses: { $push: "$status" },
        },
      },
      { $sort: { lastBooking: -1 } },
    ]);

    return NextResponse.json({ clients });
  } catch (error) {
    console.error("Get clients error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
