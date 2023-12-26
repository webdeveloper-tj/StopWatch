const span = document.querySelector("span");
const start_btn = document.querySelectorAll("button")[0];
const stop_btn = document.querySelectorAll("button")[1];
const reset_btn = document.querySelectorAll("button")[2];
let second = 0;
let minut = 0;

start_btn.addEventListener("click", (e) => {
  const myinterval = setInterval(function () {
    const d = new Date();
    second++;
    if (second == 60) {
      minut++;
      second = 0;
    }
    if (second < 10) {
      second = "0" + second;
    } else {
      second = second;
    }
    if (minut <= 9) {
      span.innerHTML = `0${minut}:${second}`;
    } else {
      span.innerHTML = `${minut}:${second}`;
    }
  }, 1000);
  if (start_btn.click) {
    e.target.disabled = true;
    stop_btn.disabled = false;
    reset_btn.disabled = false;
  }

  stop_btn.addEventListener("click", function (e) {
    clearInterval(myinterval);
    e.target.disabled = true;
    start_btn.disabled = false;
    minut = minut;
    second = second;
  });
  reset_btn.addEventListener("click", function (e) {
    minut = 0;
    second = 0;
    span.innerHTML = `00:00`;

    stop_btn.disabled = false;
    start_btn.disabled = false;
    clearInterval(myinterval);
  });
});
