# SmileCare Dental Clinic Website

A full-stack Next.js dental clinic website with public pages, online booking, and an admin panel backed by MongoDB.

## Features

### Public Website
- **Home** – Hero, services overview, call-to-action
- **About** – Clinic story, values, team
- **Services** – All dental services with pricing
- **Contact** – Contact form and clinic info
- **Book Appointment** – Online booking form

### Admin Panel (`/admin`)
- JWT-based authentication
- Dashboard with booking statistics
- **Bookings** – View, search, filter, create, edit, delete
- **Clients** – Aggregated client list from bookings

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Admin Login

- URL: [http://localhost:3000/login](http://localhost:3000/login)
- Email: `admin@dentalcare.com`
- Password: `admin123`

The admin account is auto-created on first login.

### Environment Variables

Copy `.env.example` to `.env.local`:

```
URL_DB=your_mongodb_connection_string
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@dentalcare.com
ADMIN_PASSWORD=admin123
```

## Tech Stack

- Next.js 16 (App Router)
- MongoDB + Mongoose
- Tailwind CSS
- JWT Authentication (httpOnly cookies)
