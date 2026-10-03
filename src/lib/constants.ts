import type { ServiceType, BookingStatus } from "@/types/booking";

export const SERVICE_LABELS: Record<ServiceType, string> = {
  "general-checkup": "General Checkup",
  "teeth-cleaning": "Teeth Cleaning",
  "root-canal": "Root Canal",
  "dental-implant": "Dental Implant",
  "teeth-whitening": "Teeth Whitening",
  braces: "Braces & Orthodontics",
  emergency: "Emergency Care",
};

export const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const STATUS_COLORS: Record<BookingStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export const CLINIC_INFO = {
  name: "Dental Clinic",
  tagline: "Expert Dental Care by Dr. Ashutosh Sinha & Dr. Abhilasha Sinha",
  phone: "+91 8809917680",
  email: "info@dentalclinic.com",
  address: "Clinic Address, City, State - Pin",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
};

export const SERVICES = [
  {
    id: "general-checkup" as ServiceType,
    title: "General Checkup",
    description: "Comprehensive oral examination and preventive care.",
    price: "₹750",
  },
  {
    id: "teeth-cleaning" as ServiceType,
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar.",
    price: "₹1,200",
  },
  {
    id: "root-canal" as ServiceType,
    title: "Root Canal",
    description: "Pain-free treatment to save infected teeth.",
    price: "₹8,000",
  },
  {
    id: "dental-implant" as ServiceType,
    title: "Dental Implant",
    description: "Permanent solution for missing teeth.",
    price: "₹25,000",
  },
  {
    id: "teeth-whitening" as ServiceType,
    title: "Teeth Whitening",
    description: "Brighten your smile with professional whitening.",
    price: "₹3,500",
  },
  {
    id: "braces" as ServiceType,
    title: "Braces & Orthodontics",
    description: "Straighten teeth with modern orthodontic solutions.",
    price: "₹35,000",
  },
  {
    id: "emergency" as ServiceType,
    title: "Emergency Care",
    description: "Urgent dental care when you need it most.",
    price: "₹1,500",
  },
];
