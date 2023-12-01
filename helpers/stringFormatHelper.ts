export function formatDate(date: string): string {
  let formattedDate = new Date(date).toLocaleDateString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}
