
document.addEventListener("DOMContentLoaded", function () {
  syncStudentDashboard();
  syncAdminDashboard();
});

// Student Dashboard Counts
function syncStudentDashboard() {
  const activityCards = document.querySelectorAll(".activity-cards .card");
  if (!activityCards || activityCards.length < 3) return;

  const companies = getCompanies();
  const applications = getApplications();
  const shortlistedCount = applications.filter(a => a.status.toLowerCase() === "shortlisted").length;

  // Available drives count
  activityCards[0].querySelector("p").textContent = companies.length;

  // Submitted applications count
  activityCards[1].querySelector("p").textContent = applications.length;

  // Shortlisted count
  activityCards[2].querySelector("p").textContent = shortlistedCount;
}

// Admin Dashboard Counts
function syncAdminDashboard() {
  const statCards = document.querySelectorAll(".stat-card .value");
  if (!statCards || statCards.length < 2) return;

  const applications = getApplications();
  const companies = getCompanies();

  // Selected / Placed students
  const placed = applications.filter(a => a.status.toLowerCase() === "selected").length + 248;
  statCards[0].textContent = placed;

  // Average package calculation from companies
  let totalPkg = 0;
  companies.forEach(function (c) {
    const num = parseFloat(c.pkg.replace(/[^0-9.]/g, ""));
    if (!isNaN(num)) totalPkg += num;
  });
  const avgPkg = (totalPkg / (companies.length || 1)).toFixed(1);
  statCards[1].textContent = `₹${avgPkg} LPA`;
}