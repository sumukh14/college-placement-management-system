const nameInput = document.getElementById("studentName");
const loginForm = document.querySelector("form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.setItem("studentName", nameInput.value);

    window.location.href = "dashboard.html";

  });
}
const savedName = localStorage.getItem("studentName");

const studentNameElement = document.getElementById("studentName");

if (studentNameElement && savedName) {
  studentNameElement.textContent = savedName.split(" ")[0];
}
const logout = document.getElementById("logout");

if (logout) {
  logout.addEventListener("click", function () {
    localStorage.removeItem("studentName");
  });
}


const calendarStrip = document.getElementById("calendarStrip");

if (calendarStrip) {
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const day = date.getDate();

    const month = date.toLocaleString("en-US", {
      month: "short"
    }).toUpperCase();
    const calendarDay = document.createElement("div");
    calendarDay.classList.add("calendar-day");
    if (i == 0) {
      calendarDay.classList.add("active-day");
    }
    calendarDay.innerHTML = `
      <span>${day}</span>
      <small>${month}</small>
    `;
    calendarStrip.appendChild(calendarDay);
  }

}