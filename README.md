# 🔐 AuthX - Secure Authentication System

A full-stack authentication system with JWT-based security, role-based access control, and an admin management dashboard.

---

## 🚀 Live Demo

* 🌐 Frontend: https://authx-frontend.vercel.app
* ⚙️ Backend: https://authx-secure-auth-system-production.up.railway.app

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login with JWT
* Secure password hashing using BCrypt
* Token-based authentication

### 🧑‍💼 Role-Based Access

* USER & ADMIN roles
* Protected routes
* Admin-only endpoints

### 🛠 Admin Dashboard

* View all users
* Delete users
* User count statistics

### ⚙️ Backend

* Spring Boot (Java)
* Spring Security
* JWT Authentication
* Global Exception Handling
* MySQL (Railway cloud database)

### 🎨 Frontend

* React + Vite
* Tailwind CSS
* Protected routing
* REST API integration

---

## 🗄️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Spring Boot, Spring Security, JWT
* **Database:** MySQL (Railway)
* **Deployment:** Vercel (Frontend), Railway (Backend)

---

## 🔑 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/change-password`

### Admin

* `GET /admin/users`
* `DELETE /admin/user/{id}`

---

## ⚙️ Environment Variables

### Backend (Railway)

* `DB_URL`
* `DB_USERNAME`
* `DB_PASSWORD`
* `JWT_SECRET`

### Frontend (.env)

```env
VITE_API_URL=https://authx-secure-auth-system-production.up.railway.app
```

---

## 🧪 Run Locally

### Backend

```bash
mvn spring-boot:run
```

### Frontend

```bash
npm install
npm run dev
```

---

## 🔒 Security Highlights

* JWT-based authentication
* Password hashing using BCrypt
* Role-based authorization
* Stateless session management
* Centralized exception handling

---

## 📌 Future Improvements

* Refresh tokens
* Email verification
* Password reset functionality
* Role management UI
* Audit logs

---

## 👨‍💻 Author

**Anil Chakravarthi Meesala**

