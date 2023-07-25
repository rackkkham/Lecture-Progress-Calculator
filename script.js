const headingText = document.querySelector("#heading");
const currentLecture = document.querySelector(".current-lecture");

headingText.textContent = "Calculate your lectures progression ⏳";

document.querySelector(".button").addEventListener("click", function () {
  let totalLecturesInput = Number(
    document.querySelector(".total-lectures").value
  );
  let currentLectureInput = Number(
    document.querySelector(".current-lecture").value
  );

  function percentageOfLectures(totalLectures, lectureNumber) {
    if (!lectureNumber && !totalLectures) {
      return "No number! ⛔️";
    }
    if (!totalLectures || isNaN(totalLectures)) {
      return "Please enter the Number of total lectures.";
    }
    if (!lectureNumber || isNaN(lectureNumber)) {
      return "Please enter your Current lecture number.";
    }
    if (
      lectureNumber > totalLectures ||
      lectureNumber <= 0 ||
      isNaN(lectureNumber)
    ) {
      return `Invalid lecture number! ⛔️<br>Your current lecture number cannot be higher than a number of total lectures.`;
    }
    const text = `You have reached to the ${lectureNumber}th lecture out of ${totalLectures}, and you have completed ${(
      (lectureNumber / totalLectures) *
      100
    ).toFixed(2)}% of the total course. <br> You've got ${
      totalLectures - lectureNumber
    } more lectures to go.`;

    if (lectureNumber === totalLectures) {
      return "CONGRATULATIONS! 🎉 <br>YOU HAVE COMPLETED THE JAVASCRIPT COURSE! <br>YOU HAVE MADE IT!";
    }
    return text;
  }

  let completed = percentageOfLectures(totalLecturesInput, currentLectureInput);
  console.log(completed);

  document.querySelector("#output-text").innerHTML = completed;
});
