const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  hour12: true,
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  month: "short",
  date: "2-digit"
});
export const formateDate = (date) => dateFormatter.format(date);
