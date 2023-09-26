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

const formateDate = (createdAt) => {
  // Определить дату картинки;
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const monthYear = `${month}‘${year.toString().slice(2)}`;
  const dayMonth = `${day} ${month}`;

  return { dayMonth, monthYear };
};

const formateDataForFront = (allImages) => {
  // Форматирование данных под фронт
  const totalCount = allImages.count;
  const dates = {};
  const data = {};

  allImages.rows.forEach((item) => {
    const { id, title, src, createdAt } = item.dataValues;

    // Определить дату картинки;
    const { dayMonth, monthYear } = formateDate(createdAt);

    // Определить обьект с картинками
    const imageData = { id, title, src, date: dayMonth };

    // Проверить наличие этой даты - добавить в data
    // Если нету - добавить новую дату
    if (!!!dates[monthYear]) {
      dates[monthYear] = true;
      data[monthYear] = [imageData];
    } else {
      data[monthYear].push(imageData);
    }
  });

  return { totalCount, dates: Object.keys(dates), data };
};

module.exports = { formateDataForFront, formateDate };
