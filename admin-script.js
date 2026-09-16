const adminForm = document.querySelector("form");

if (adminForm) {
    adminForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Admin login submitted");
    });
}