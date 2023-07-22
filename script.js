const headingText = document.querySelector("#heading");
const currentLecture = document.querySelector(".current-lecture");

headingText.textContent = "Calculate your lectures progression ⏳";

document.querySelector(".button").addEventListener("click", function () {
  let totalLecturesz = Number(document.querySelector(".total-lectures").value);
  let currentLecturez = Number(
    document.querySelector(".current-lecture").value
  );

  function percentageOfLectures(totalLectures, lectureNumber) {
    if (!lectureNumber && !totalLectures) {
      return "No number!";
    }
    if (
      lectureNumber > totalLectures ||
      lectureNumber <= 0 ||
      isNaN(lectureNumber)
    ) {
      return `Invalid lecture number! Your current lecture number cannot be higher than the number of total lectures you.`;
    }
    const text = `You have reached to the ${lectureNumber}th lecture out of ${totalLectures}, and you have completed ${(
      (lectureNumber / totalLectures) *
      100
    ).toFixed(2)}% of the total course. You've got ${
      totalLectures - lectureNumber
    } more lectures to go.`;

    if (lectureNumber === totalLectures) {
      return "CONGRATULATIONS! YOU HAVE COMPLETED THE JAVASCRIPT COURSE!\nYOU HAVE MADE IT!";
    }
    return text;
  }

  let completed = percentageOfLectures(totalLecturesz, currentLecturez);
  console.log(completed);

  document.querySelector("#output-text").textContent = completed;
});
