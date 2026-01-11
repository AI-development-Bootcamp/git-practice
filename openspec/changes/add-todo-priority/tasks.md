# Tasks

## Backend (`server/`)
- [ ] **Data Model**: Update `Todo` type definition (if using TS/JSDoc) to include `priority`.
- [ ] **Service**: Update `todoService.js` `create` method to handle `priority` (default to 'medium').
- [ ] **Service**: Update `todoService.js` `update` method to allow modifying `priority`.
- [ ] **API**: Update `POST /` validation to accept valid `priority` values.
- [ ] **API**: Update `PUT /:id` validation to accept valid `priority` values.
- [ ] **Persistence**: Ensure `todos.json` correctly saves the new field.

## Frontend (`client/`)
- [ ] **Types**: Update client-side `Todo` interface with `priority: 'low' | 'medium' | 'high'`.
- [ ] **Service**: Update `api/todoService.ts` (or equivalent) to pass `priority` in Create/Update calls.
- [ ] **Component**: Create `PriorityBadge` component for display.
- [ ] **Component**: Create `PrioritySelector` component (Dropdown/Radio).
- [ ] **UI**: Add `PrioritySelector` to `AddTodoForm`.
- [ ] **UI**: Add `PriorityBadge` to `TodoItem`.
- [ ] **UI**: Add "Edit Priority" capability (either in-line or via edit mode).
