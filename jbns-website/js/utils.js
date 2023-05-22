function formatDate(date, locale, options) {
  return date.toLocaleDateString(locale, options);
}

function formatIslamicDate(date) {
  const islamicFormatter = new Intl.DateTimeFormat("ms-MY-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedDate = islamicFormatter.format(date);
  const [day, month, year] = formattedDate.split(" ");

  return `${day.replace(",", "")} ${month} ${year.replace(/[^0-9]/g, "")}`;
}

const currentDate = new Date();
document.getElementById("islamicDateOutput").innerHTML =
  formatIslamicDate(currentDate);
document.getElementById("gregorianDateOutput").innerHTML = formatDate(
  currentDate,
  "en-US",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);
