export const selectTheme = state => state.theme.mode;

export const selectTasks = state => state.tasks;

export const selectTasksForToday = state => {
  const today = new Date().toISOString().slice(0, 10);
  return state.tasks.filter(({ date }) => date === today);
};