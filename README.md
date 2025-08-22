# 🧠 KonoATS – Applicant Tracking System

**KonoATS** is an **Applicant Tracking System (ATS)** application designed for small and medium-sized companies, startups, and technical recruiters.  
The project is educational and demonstrative in nature, but it follows a production-ready structure.

⭐ If you want to follow the project’s progress and get notified about the release, don’t forget to star the repository!

ℹ️ Note: This repository contains the **frontend (PWA)** of KonoATS. The backend (C# / .NET + PostgreSQL) is being developed in a private repository.

---

## ✨ Main Features

🔐 **Protected area – Recruiter panel (PWA):**

- 📊 **Dashboard** – quick overview of activity and statistics  
- 📌 **Job offers** – create, edit, archive  
- 👤 **Candidates** – browse applications, CVs, notes, recruitment tasks  
- 🔄 **Recruitment pipeline** – stages such as _Applied → Interview → Offer → Rejected_  
- ✉️ **Mailing** – send template messages (invitations, offers, rejections)  
- 📈 **Statistics** (optional)  

---

## 🛠️ Tech Stack

### 🎯 Frontend (PWA) (Public repository)

- **React 19 + TypeScript**  
- **Vite** – fast bundler and dev server  
- **Redux Toolkit** – global store + async API slice  
- **React Router v7**  
- **React Hook Form + Zod** – forms and validation  
- **TailwindCSS + CSS Modules** – design system  
- **PWA** – installable web app (manifest, offline, cache)  

### 🧩 Backend (Private repository)

- **.NET 9 (C#)**  
- **Entity Framework Core (Code First) + PostgreSQL**  
- **REST API**  
- **JWT authentication**  
- **Email sending**: SMTP or MailerSend  
- **FluentValidation** – backend validation  
- **Hosting API**: locally / Railway / Render  

---

## 🔐 Security & Privacy

All API keys and backend URLs are stored in `.env` files and are not committed to the repository.  

---

## 🧳 DEMO Mode (mock)

To run the app in demo mode (without backend), create a `.env` file with:


VITE_USE_MOCK=true

Then install and run the project:
```bash
npm install

npm run dev

```

In demo mode you can use the "Login as Demo" button to log in as a test user.

## 👨‍💻 Author

Kamil Konopski
Frontend Developer & project creator

This repository was created for learning purposes, portfolio building, and technology experiments.

---

## 📜 License

This project is covered by a custom license (see below).

The following are not allowed:

Using the code in commercial projects

Modifying and redistributing the code as your own

Cloning the repository for distribution or sales purposes

You may:

Browse the code

Run it locally

Use it for educational purposes

More information: LICENSE
