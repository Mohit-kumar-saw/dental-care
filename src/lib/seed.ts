import User from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "admin@dentalcare.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const existing = await User.findOne({ email });
  if (existing) return existing;

  const hashed = await hashPassword(password);
  return User.create({
    name: "Admin",
    email,
    password: hashed,
    role: "admin",
  });
}
