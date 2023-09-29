export const getMonth = (mon: string) => {
  return new Date(mon).toLocaleString("default", { month: "short" });
};
