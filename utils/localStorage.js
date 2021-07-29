export function saveTasksToLocalStorage(key, tasks) {
  const json = JSON.stringify(tasks);
  localStorage.setItem(key, json);
}

export function getTasksFromLocalStorage(key, defaultValue) {
  const json = localStorage.getItem(key);
  if (!json) {
    return defaultValue;
  }
  const data = JSON.parse(json);
  return data;
}
