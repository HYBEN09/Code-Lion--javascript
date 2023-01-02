const now = new Date();

const start = new Date("2022-01-02");

const timeDiff = now.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);

$("#love").text(day + "일 째");

// 발렌타일 계산
const valentine = new Date("2022-02-14");
const timeDiff2 = valentine.getTime() - now.getTime();
const day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);

$("#valentine").text(day + "일 남음");

// 1000일 계산
const thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
const thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();

$("#thousand-date").text(thousandDate);

const timeDiff3 = valentine.getTime() - now.getTime();
const day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);

$("#thousand").text(day3 + "일 남음");
