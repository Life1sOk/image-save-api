const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formateDataForFront = (allImages) => {
  // Форматирование данных под фронт
  const totalCount = allImages.count;
  const dates = {};
  const data = {};

  allImages.rows.forEach((item) => {
    const { id, title, src, createdAt } = item.dataValues;

    // Определить дату картинки;
    const date = new Date(createdAt);

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${month}‘${year.toString().slice(2)}`;

    // Определить обьект с картинками
    const imageData = { id, title, src, date: `${day} ${month}` };

    // Проверить наличие этой даты - добавить в data
    // Если нету - добавить новую дату
    if (!!!dates[formattedDate]) {
      dates[formattedDate] = true;
      data[formattedDate] = [imageData];
    } else {
      data[formattedDate].push(imageData);
    }
  });

  return { totalCount, dates: Object.keys(dates), data };
};

module.exports = { formateDataForFront };
