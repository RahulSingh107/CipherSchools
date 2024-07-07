const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
});

export const formateDate = (date) => dateFormatter.format(date);
