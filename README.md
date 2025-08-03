# 🧠 KonoATS – System wspomagający rekrutację

**KonoATS** to aplikacja typu **ATS (Applicant Tracking System)** stworzona z myślą o małych i średnich firmach, startupach oraz rekruterach technicznych. Projekt ma charakter edukacyjny i demonstracyjny, ale zachowuje strukturę zgodną ze standardami produkcyjnymi.

---

## ✨ Główne funkcje

🔐 **Część chroniona – panel rekrutera (PWA)**:

- 📊 **Dashboard** – szybki przegląd aktywności i statystyk
- 📌 **Oferty pracy** – tworzenie, edycja, archiwizacja
- 👤 **Kandydaci** – przeglądanie aplikacji, CV, notatki, zadania rekrutacyjne
- 🔄 **Pipeline rekrutacyjny** – etapy typu _Applied → Interview → Offer → Rejected_
- ✉️ **Mailing** – wysyłka szablonowych wiadomości (zaproszenia, oferty, odrzucenia)
- 📈 **Statystyki** (opcjonalne)

---

## 🛠️ Technologie

### 🎯 Frontend (PWA) (Repozytorium publiczne)

- **React 19 + TypeScript**
- **Vite** – szybki bundler i dev server
- **Redux Toolkit** – globalny store + async API slice
- **React Router v7**
- **React Hook Form + Zod** – formularze i walidacja
- **TailwindCSS + CSS Modules** – design system
- **PWA** – instalowalna aplikacja webowa (manifest, offline, cache)

### 🧩 Backend (Repozytorium prywatne)

- **.NET 9 (C#)**
- **Entity Framework Core (Code First) + PostgreSQL**
- **REST API**
- **Autoryzacja JWT**
- **Wysyłka maili**: SMTP lub MailerSend
- **FluentValidation** – walidacja po stronie backendu
- **Serwowanie API**: lokalnie / Railway / Render

---

## 🔐 Bezpieczeństwo i prywatność

Wszystkie klucze API oraz adresy backendowe znajdują się w .env i nie są commitowane.

W pliku .env.example znajdują się przykładowe dane do uruchomienia lokalnie.

Zmienne frontendowe muszą mieć prefix VITE_.

---

## 👨‍💻 Autor
Kamil Konopski

Frontend Developer & twórca projektu

Repozytorium stworzone do nauki, rozwoju portfolio i eksperymentów technologicznych.

---

## 📜 Licencja
Projekt objęty autorską licencją (poniżej).

Nie zezwala się na:

wykorzystywanie kodu w projektach komercyjnych,

modyfikację i udostępnianie kodu jako własnego,

klonowanie repozytorium w celach dystrybucyjnych lub sprzedażowych.

Kod może być przeglądany, uruchamiany lokalnie i wykorzystywany do celów edukacyjnych.

Więcej informacji: LICENSE
