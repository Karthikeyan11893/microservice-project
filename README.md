# Auth Service

Production-ready Authentication & Authorization backend built with:

- Node.js
- Express.js
- TypeScript
- MongoDB
- Redis
- JWT Authentication
- Swagger Documentation
- Docker
- Modular Enterprise Architecture

---

# Features

- JWT Authentication
- Refresh Token Rotation
- Role Based Authorization (RBAC)
- Redis Session Storage
- Swagger API Docs
- Global Error Handling
- Rate Limiting
- Docker Support
- Scalable Modular Architecture
- Repository Pattern
- Middleware Architecture
- Health Monitoring Endpoint

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Backend Framework |
| TypeScript | Type Safety |
| MongoDB | Primary Database |
| Mongoose | ODM |
| Redis | Caching / Refresh Tokens |
| JWT | Authentication |
| Swagger | API Documentation |
| Docker | Containerization |
| Winston | Logging |

---

# Project Structure

```txt
src/
│
├── config/
│   ├── env.ts
│   ├── logger.ts
│   ├── redis.ts
│   └── swagger.ts
│
├── core/
│   ├── middleware/
│   ├── errors/
│   └── utils/
│
├── modules/
│   ├── auth/
│   └── user/
│
├── routes/
│   └── index.ts
│
├── shared/
│   └── database.ts
│
├── app.ts
└── server.ts
```

---

# Architecture Overview

```txt
Client
   ↓
Express Server
   ↓
Middleware Layer
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
MongoDB / Redis
```

---

# Authentication Flow

```txt
Client
   ↓
POST /login
   ↓
Controller
   ↓
AuthService
   ↓
MongoDB
   ↓
Generate JWT
   ↓
Store Refresh Token in Redis
   ↓
Return Tokens
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

Using pnpm:

```bash
pnpm install
```

---

# Environment Variables

Create `.env`

```env
PORT=9000

MONGO_URI=mongodb://localhost:27017/auth-service

REDIS_URL=redis://localhost:6379

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret
```

---

# Running The Project

## Development

```bash
pnpm dev
```

---

## Production Build

```bash
pnpm build
```

---

## Start Production

```bash
pnpm start
```

---

# API Base URL

```txt
http://localhost:9000/api/v1
```

---

# Swagger Documentation

```txt
http://localhost:9000/docs
```

---

# Health Check

```txt
http://localhost:9000/health
```

---

# API Endpoints

## Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/signup` | Register user |
| POST | `/auth/login` | Login user |
| POST | `/auth/refresh` | Refresh access token |
| POST | `/auth/logout` | Logout user |

---

## User Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |

---

# Middleware

## Implemented Middleware

- CORS
- Helmet
- Rate Limiter
- JWT Authentication
- Error Handler
- Validation Middleware

---

# Security Features

- Password Hashing (bcrypt)
- JWT Authentication
- Refresh Token Rotation
- Redis Session Storage
- Role Based Authorization
- Rate Limiting
- Helmet Security Headers

---

# Docker

## Build Docker Image

```bash
docker build -t auth-service .
```

---

## Run Docker Container

```bash
docker run -p 9000:9000 auth-service
```

---

# Docker Compose (Recommended)

```yaml
version: '3.9'

services:
  auth-service:
    build: .
    ports:
      - '9000:9000'

    env_file:
      - .env

    depends_on:
      - mongodb
      - redis

  mongodb:
    image: mongo
    ports:
      - '27017:27017'

  redis:
    image: redis
    ports:
      - '6379:6379'
```

---

# Run Full Stack

```bash
docker compose up
```

---

# Logging

Logging handled using Winston.

Logs include:

- Server startup
- Errors
- Database connections
- Request tracing

---

# Error Handling

Centralized global error handler:

```txt
core/errors/errorHandler.ts
```

All errors return standardized responses.

---

# Standard API Response

## Success

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# Future Improvements

- API Gateway
- Dependency Injection
- Kafka / RabbitMQ
- Kubernetes
- CI/CD Pipeline
- Service Discovery
- Distributed Tracing
- Monitoring & Metrics

---

# Current Architecture Type

```txt
Modular Monolith
```

The system is structured to easily evolve into microservices later.

---
