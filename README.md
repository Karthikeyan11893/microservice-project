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
- Swagger API Documentation
- Global Error Handling
- Rate Limiting
- Docker Support
- Scalable Modular Architecture
- Repository Pattern
- Middleware Architecture
- Health Monitoring Endpoint

---

# Tech Stack

| Technology | Purpose                  |
| ---------- | ------------------------ |
| Node.js    | Runtime                  |
| Express.js | Backend Framework        |
| TypeScript | Type Safety              |
| MongoDB    | Primary Database         |
| Mongoose   | ODM                      |
| Redis      | Caching / Refresh Tokens |
| JWT        | Authentication           |
| Swagger    | API Documentation        |
| Docker     | Containerization         |
| Winston    | Logging                  |

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
                    Client / Frontend
                           │
                           ▼
                 ┌───────────────────┐
                 │   Express Server  │
                 │      app.ts       │
                 └───────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
 ┌────────────┐    ┌──────────────┐   ┌──────────────┐
 │ Middleware │    │ Swagger Docs │   │ Health Check │
 └────────────┘    └──────────────┘   └──────────────┘
        │
        ▼
 ┌────────────────────────────────────┐
 │         Route Layer                │
 │         /api/v1                    │
 └────────────────────────────────────┘
        │
   ┌────┴────┐
   ▼         ▼
Auth Routes  User Routes
   │             │
   ▼             ▼
Controllers    Controllers
   │             │
   ▼             ▼
Services       Services
   │             │
   ▼             ▼
Repositories   Repositories
   │             │
   └──────┬──────┘
          ▼
      MongoDB

          ▼
        Redis
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

# PNPM Setup

## Enable Corepack

```bash
corepack enable
```

---

## Install PNPM

```bash
corepack prepare pnpm@latest --activate
```

Verify installation:

```bash
pnpm -v
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate To Project

```bash
cd auth-service
```

---

## Install Dependencies

```bash
pnpm install
```

---

## Approve Native Package Builds

Some packages require build script approval.

Run:

```bash
pnpm approve-builds
```

Use:

```txt
SPACE → Select package
ENTER → Confirm
```

---

# Environment Variables

Create `.env`

```env
PORT=9000

MONGO_URI=mongodb://localhost:27017/auth-service

REDIS_URL=redis://localhost:6379

```

---

# Running The Project

## Development

```bash
pnpm dev
```

Expected logs:

```txt
MongoDB Connected
Redis Connected
Server running on port 9000
Swagger UI: http://localhost:9000/docs
API Base URL: http://localhost:9000/api/v1
```

---

# Build Production Files

```bash
pnpm build
```

Compiles TypeScript into:

```txt
dist/
```

---

# Start Production Server

```bash
pnpm start
```

Runs compiled production build.

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

Expected response:

```json
{
  "success": true,
  "message": "Server is healthy"
}
```

---

# API Endpoints

## Auth Routes

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/auth/signup`  | Register user        |
| POST   | `/auth/login`   | Login user           |
| POST   | `/auth/refresh` | Refresh access token |
| POST   | `/auth/logout`  | Logout user          |

---

## User Routes

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/users`     | Get all users  |
| GET    | `/users/:id` | Get user by ID |

---

# Middleware

Implemented middleware:

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

# Docker Compose

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

Starts:

- Auth Service
- MongoDB
- Redis

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

# Current Architecture

```txt
Modular Monolith
```

The project is structured to easily evolve into microservices later.

---

# Future Improvements

- API Gateway
- Dependency Injection
- Kafka / RabbitMQ
- Kubernetes
- CI/CD Pipeline
- Distributed Tracing
- Monitoring & Metrics
- Service Discovery

