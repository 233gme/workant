export const dateParser = (date: string): string => {
  const dateStr = new Date(date).toDateString();
  const hour = new Date(date).getHours();
  const minute = new Date(date).getMinutes();
  return `${dateStr} ${hour}:${minute}`;
};
