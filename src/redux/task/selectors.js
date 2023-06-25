export const selectAllTasks = state => state.tasks.tasks;

export const selectTasksError = state => state.tasks.error;

export const selectTasksLoading = state => state.tasks.isLoading;

export const selectSuccessful = state => state.tasks.successful;
