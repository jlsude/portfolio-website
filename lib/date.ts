export function formatDate(dateStr?: string) {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Present";
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}
