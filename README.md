# Pocketchat

## Setting up pocketbase

---

Steps to run the project in local:

1. Download latest [PocketBase](https://pocketbase.io/docs/) binary
2. `./pocketbase migrate`
3. `./pocketbase serve`
4. Open [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/) and setup an admin account

> The first time, when you access the Admin dashboard UI, it will prompt you to create your first admin account.

REST API - [http://127.0.0.1:8090/api/](http://127.0.0.1:8090/api/)

Admin UI - [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/)

## Setting up frontend

---

Open another terminal and run

1. `cp .env.example .env`
2. `pnpm install`
3. `pnpm dev`

Open [http://localhost:3000](http://localhost:3000)
