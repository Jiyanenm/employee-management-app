# Employee Management App (Angular + Firebase)

A modern **Employee Management System** built using **Angular**, **Firebase Authentication**, and **Firestore**.  
The application supports full CRUD operations, authentication, validation, responsive UI, toast notifications, and deployment on Vercel.

---

## 🚀 Live Demo

https://employee-management-app-tau-ashen.vercel.app/

---

## ✨ Features

## 🔐 Authentication
- Firebase email/password login
- Logout functionality
- Session-based navigation flow

## 👥 Employee Management (CRUD)
- Add employee
- Edit employee
- Delete employee
- View employees from Firestore
- Real-time updates

## 🔎 Search & Filter
- Search by name
- Search by email
- Search by department
- Instant filtering

## 🎨 UI / UX Improvements
- Responsive table design
- Mobile card layout
- Empty state UI when no records exist
- Loading spinner support
- Toast notifications (success/error/info/warning)
- Clean admin dashboard layout

## 🧾 Form Features
- Template-driven forms (ngModel)
- Required field validation
- Email validation
- Password validation (login)
- Error highlighting in red
- Clear/reset form button
- Loading state on submit

## ⏳ Loading System
- Button-level loading states
- Global spinner support
- Prevents multiple submissions

## 🔔 Toast System
- Centralized ToastService
- Success messages
- Error messages
- Info and warning messages

## 🔥 Firebase Integration
- Firebase Authentication
- Firestore database
- Real-time CRUD operations

## 🌐 Deployment
- Hosted on Vercel
- Automatic CI/CD from GitHub
- SPA routing configured via `vercel.json`

---

## 🛠 Tech Stack

- Angular 20
- TypeScript
- Firebase (Auth + Firestore)
- ngx-toastr
- HTML5 / CSS3
- Vercel Hosting

---

## 📁 Project Structure

src/
app/
core/
services/
auth.service.ts
employee.service.ts
toast.service.ts
loading.service.ts

features/
auth/
login/
employees/
pages/
employee-list/

---

## 🔄 Workflow

## 🔐 Login Flow
- User enters email and password
- Firebase Auth validates credentials
- Success or error toast displayed
- Redirect to employee dashboard

## 👨‍💼 Employee Flow
- Fetch employees from Firestore
- Display in table or mobile cards
- Search and filter data
- Add / Edit employee via form
- Delete employee with confirmation

---

## 🎯 UI Improvements Implemented
- Sticky header layout
- Responsive table with mobile fallback cards
- Status badges (Active / Inactive)
- Empty state design
- Compact form design
- Button hover effects
- Clean spacing and layout consistency

---

## ⚙️ Installation

bash
npm install
ng serve

## ⚙️Build

ng build