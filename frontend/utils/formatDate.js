const padStartWith0 = dateNr => {
  return String(dateNr).padStart(2, '0');
}

const getFormattedDate = dateStr => {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${padStartWith0(day)}.${padStartWith0(month)}.${year}`;
};

const getFormattedTime = dateStr => {
  const date = new Date(dateStr);

  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${padStartWith0(hour)}:${padStartWith0(minute)}`;
}

export { getFormattedDate, getFormattedTime };
