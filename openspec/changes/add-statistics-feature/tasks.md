## 1. Backend: Statistics Service Method
- [ ] 1.1 Add `getStatistics()` method to `server/src/services/todoService.js`
- [ ] 1.2 Calculate total count (all todos)
- [ ] 1.3 Calculate todo count (status === 'todo')
- [ ] 1.4 Calculate done count (status === 'done')
- [ ] 1.5 Calculate completion percentage ((done / total) * 100, handle zero division)
- [ ] 1.6 Return statistics object with all metrics

## 2. Backend: Statistics API Endpoint
- [ ] 2.1 Add GET `/api/statistics` route handler
- [ ] 2.2 Call `todoService.getStatistics()`
- [ ] 2.3 Return statistics as JSON response
- [ ] 2.4 Register route in server (can add to existing todos routes or create separate file)

## 3. Frontend: API Service Extension
- [ ] 3.1 Add `statistics` object to `client/src/services/api.js`
- [ ] 3.2 Add `getAll()` method that calls `GET /api/statistics`
- [ ] 3.3 Handle errors appropriately

## 4. Frontend: Navigation Component
- [ ] 4.1 Create `client/src/components/Navigation.jsx`
- [ ] 4.2 Add buttons/links for "Tasks" and "Statistics" pages
- [ ] 4.3 Accept `currentPage` and `onPageChange` props
- [ ] 4.4 Style navigation appropriately

## 5. Frontend: Statistics Page Component
- [ ] 5.1 Create `client/src/components/StatisticsPage.jsx`
- [ ] 5.2 Add state for statistics data, loading, and error
- [ ] 5.3 Fetch statistics on mount using `api.statistics.getAll()`
- [ ] 5.4 Create card components for each metric:
  - [ ] 5.4.1 Total tasks card
  - [ ] 5.4.2 Todo count card
  - [ ] 5.4.3 Done count card
  - [ ] 5.4.4 Completion percentage card
- [ ] 5.5 Display loading state
- [ ] 5.6 Display error state
- [ ] 5.7 Style cards appropriately

## 6. Frontend: App Component Updates
- [ ] 6.1 Add `currentPage` state ('tasks' | 'statistics')
- [ ] 6.2 Add `handlePageChange` function
- [ ] 6.3 Import Navigation component
- [ ] 6.4 Import StatisticsPage component
- [ ] 6.5 Render Navigation component
- [ ] 6.6 Conditionally render Tasks view or StatisticsPage based on `currentPage`
- [ ] 6.7 Ensure existing Tasks functionality still works

## 7. Validation
- [ ] 7.1 Test statistics endpoint returns correct data
- [ ] 7.2 Test navigation switches between pages
- [ ] 7.3 Test statistics page displays all metrics correctly
- [ ] 7.4 Test edge cases (no todos, all done, all todo)
- [ ] 7.5 Verify statistics update after todo changes (refresh page)
