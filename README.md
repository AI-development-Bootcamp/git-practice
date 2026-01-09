# Todo Workshop

A simple Todo app for the Git workshop.

## Quick Start

```bash
# Install all dependencies
npm run install:all

# Run both server and client
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:3001

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| GET | /api/todos/:id | Get single todo |
| POST | /api/todos | Create todo |
| PUT | /api/todos/:id | Update todo |
| DELETE | /api/todos/:id | Delete todo |

## Todo Object

```json
{
  "id": "uuid",
  "title": "Task title",
  "status": "todo | done",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```
