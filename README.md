# Employee Management App (Angular + Firebase)

A modern **Employee Management System** built using **Angular**, **Firebase Authentication**, and **Firestore**.

The application supports full CRUD operations, authentication, validation, responsive UI, toast notifications, and deployment on the Vercel cloud platform. It is designed to be used as a target application for my **Test Automation Framework**.

---

## 🚀 Live Demo

https://employee-management-app-tau-ashen.vercel.app/

---

## ✨ Features

## 🔐 Authentication

- Firebase email/password login
- Create Account functionality
- Forgot Password functionality
- Logout functionality
- Session-based navigation flow
- Authentication error handling with toast notifications

### Authentication Flow

- User creates an account using email and password
- Firebase Authentication stores and validates user credentials
- User can log in with registered credentials
- Forgot Password allows users to reset their password through Firebase email recovery
- Successful and failed actions display appropriate notifications

---

## 👥 Employee Management (CRUD)

- Add employee
- Edit employee
- Delete employee
- View employees from Firestore
- Real-time updates

---

## 🔎 Search & Filter

- Search by name
- Search by email
- Search by department
- Instant filtering

---

## 🎨 UI / UX Improvements

- Responsive table design
- Mobile card layout
- Empty state UI when no records exist
- Loading spinner support
- Toast notifications (success/error/info/warning)
- Clean admin dashboard layout

---

## 🧾 Form Features

- Template-driven forms (`ngModel`)
- Required field validation
- Email validation
- Password validation
- Error highlighting in red
- Clear/reset form button
- Loading state on submit

---

## ⏳ Loading System

- Button-level loading states
- Global spinner support
- Prevents multiple submissions

---

## 🔔 Toast System

- Centralized `ToastService`
- Success messages
- Error messages
- Info and warning messages

---

## 🔥 Firebase Integration

- Firebase Authentication
- Firestore database
- Real-time CRUD operations
- Secure user authentication flow

---

## 🌐 Deployment

- Hosted on Vercel
- Automatic CI/CD from GitHub
- SPA routing configured via `vercel.json`

---

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration and automated validation.

### Pipeline Workflow

- Code pushed to the `main` branch triggers the pipeline
- Dependencies are installed automatically
- Angular production build is executed
- Automated tests are executed
- Successful builds can be deployed through Vercel

### Pipeline Configuration


---

# 🛠 Tech Stack

- Angular 20
- TypeScript
- Firebase (Authentication + Firestore)
- ngx-toastr
- HTML5 / CSS3
- Vercel Hosting

.github/
└── workflows/
└── ci-cd.yml


### Benefits

- Prevents broken builds from being deployed
- Validates code changes automatically
- Supports future integration with Test Automation Framework
- Enables continuous delivery workflow
---

# 📁 Project Structure

src/
└── app/
├── core/
│ ├── services/
│ │ ├── auth.service.ts
│ │ ├── employee.service.ts
│ │ ├── toast.service.ts
│ │ └── loading.service.ts
│
├── features/
│ ├── auth/
│ └── employees/
│
└── pages/
└── employee-list/


## 📁 Project Structure

## 📁 Project Structure

```text
src/
└── app/
    ├── core/
    │   └── services/
    │       ├── auth.service.ts
    │       ├── employee.service.ts
    │       ├── toast.service.ts
    │       └── loading.service.ts
    │
    ├── features/
    │   ├── auth/
    │   │   ├── login/
    │   │   └── create-account/
    │   │
    │   └── employees/
    │
    └── pages/
        └── employee-list/

---

# 🔄 Workflow

## 🔐 Authentication Flow

- User creates an account or enters login credentials
- Firebase Authentication validates the request
- Success or error toast notification is displayed
- User is redirected to the employee dashboard after successful login

## 🔑 Password Recovery Flow

- User selects "Forgot Password"
- Firebase sends a password reset email
- User updates their password using the recovery link

## 👨‍💼 Employee Flow

- Fetch employees from Firestore
- Display employees in a table or mobile cards
- Search and filter employee data
- Add / Edit employees through forms
- Delete employees with confirmation

---

# 🎯 UI Improvements Implemented

- Sticky header layout
- Responsive table with mobile fallback cards
- Status badges (Active / Inactive)
- Empty state design
- Compact form design
- Button hover effects
- Clean spacing and layout consistency

---

# ✅ Testing Status

Authentication features verified successfully:

- ✅ Create Account flow working
- ✅ Login flow working
- ✅ Forgot Password flow working
- ✅ Logout functionality working

---

# ⚙️ Installation

```bash
npm install
ng serve
npm test -- --watch=false --browsers=ChromeHeadless 