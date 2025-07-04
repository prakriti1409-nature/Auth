# 🎤 Auth

This full-stack web application enables users and celebrities to onboard themselves through AI-powered forms using OpenAI (GPT). It supports authentication, dynamic celebrity profiles, and real-time auto-filled onboarding forms.

---

## 🛠 Tech Stack

### 🚀 Frontend
- [Next.js (App Router)]
- Tailwind CSS
- TypeScript

### 🔧 Backend
- [NestJS]
- OpenAI GPT-4 (via `openai` npm package)
- PostgreSQL (via TypeORM)
- JWT Authentication

---

## 📁 Project Structure : https://www.loom.com/share/fe71aad2e86544469db663d94e823fae
## Deployment  : https://auth-gsmp.vercel.app/


---

## 🧪 Features

- ✅ User onboarding form with AI-assisted autofill
- ✅ Celebrity onboarding via GPT-generated profile
- ✅ JWT-based authentication
- ✅ Dynamic route for celebrity profiles
- ✅ Fully deployable using Vercel (frontend) & Render (backend)

---

## ⚙️ Environment Variables

### 🧠 Backend `.env` (Render Dashboard → Environment tab)

```env
OPENAI_API_KEY=your-openai-key

DB_HOST=your-db-host
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your-db-password
DB_DATABASE=your-db-name
```


### 🔐 Auth Routes (Prefix: `/auth`)
| Method | Endpoint         | Description                                  |
|--------|------------------|----------------------------------------------|
| POST   | `/auth/register` | Register a new user                          |
| POST   | `/auth/login`    | Log in a user and get a JWT token            |
| GET    | `/auth/me`       | Get logged-in user's profile (requires JWT)  |

---

### 🤖 OpenAI Routes (Prefix: `/openai`)
| Method | Endpoint                      | Description                                                       |
|--------|-------------------------------|-------------------------------------------------------------------|
| POST   | `/openai/suggest`             | Get AI response from a generic prompt                             |
| POST   | `/openai/fill-celebrity`      | Auto-fill a celebrity profile from a one-liner                    |
| POST   | `/openai/fill-user-profile`   | Extract name, role, and interests from a user bio using AI        |

---

### 🌟 Celebrities Routes (Prefix: `/celebrities`)
| Method | Endpoint                | Description                                 |
|--------|-------------------------|---------------------------------------------|
| POST   | `/celebrities`          | Create a celebrity profile (AI-generated)   |
| GET    | `/celebrities`          | Get all celebrity profiles                  |
| GET    | `/celebrities/:id`      | Get single celebrity profile by ID          |

---

### 📄 Other Routes
| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| GET    | `/api`   | Swagger API docs UI      |
