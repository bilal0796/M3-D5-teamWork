const leftNumber = document.querySelectorAll(".left-number");
const song = document.querySelectorAll(".song");

for (let i = 1; i < leftNumber.length; i++) {
  song[i].addEventListener("mouseenter", function () {
    leftNumber[i].innerHTML = `<i class="fas fa-play"></i>`;
  });
  song[i].addEventListener("mouseleave", function () {
    leftNumber[i].innerHTML = `<p>${i}</p>`;
  });
}


