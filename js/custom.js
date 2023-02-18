function changeColor() {
  var checkFirst = document.querySelector(".radioFirst");
  var checkSecond = document.querySelector(".radioSecond");
  if (checkSecond !== null) {
    checkSecond.addEventListener("click", () => {
      checkFirst.classList.remove("active");
      checkSecond.classList.add("active");
      checkSecond.children[0].checked = true;
    });
  }
  if (checkFirst !== null) {
    checkFirst.addEventListener("click", () => {
      checkFirst.classList.add("active");
      checkFirst.children[0].checked = true;
      checkSecond.classList.remove("active");
    });
  }
}
changeColor();
const months = [
  ["Ay", 31],
  ["Yanvar", 31],
  ["Fevral", 28],
  ["Mart", 31],
  ["Aprel", 30],
  ["May", 31],
  ["Iyun", 30],
  ["Iyul", 31],
  ["Avqust", 31],
  ["Sentyabr", 30],
  ["Oktyabr", 31],
  ["Noyabr", 30],
  ["Dekabr", 31],
];
const formSelect = document.querySelector(".months");
let day = 31;
const days = document.querySelector(".days");

for (let i = 0; i < months.length; i++) {
  let option = document.createElement("option");
  option.setAttribute("data-days", months[i][1]);
  option.setAttribute("value", `${months[i][1]}`);
  option.innerHTML = months[i][0];
  console.log(option);
  formSelect.append(option);
}
const sel = (event) => {
  day = event.target.value;
  console.log(day);
  days.innerHTML = "";
  for (let i = 1; i <= day; i++) {
    let option = document.createElement("option");
    // option.setAttribute("value",)
    option.innerHTML = i;
    days.append(option);
  }
};
for (let i = 1; i <= day; i++) {
  let option = document.createElement("option");
  // option.setAttribute("value",)
  option.innerHTML = i;
  days.append(option);
}
