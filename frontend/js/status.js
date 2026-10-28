

document.addEventListener("DOMContentLoaded", function () {
  renderApplicationsTable();
});

function renderApplicationsTable() {
  const apps = getApplications();
  const tbody = document.querySelector("table tbody");
  if (!tbody) return;

  // 1. Calculate Status Summary Counts
  let countTotal = apps.length;
  let countShortlisted = 0;
  let countInterview = 0;
  let countSelected = 0;

  apps.forEach(function (app) {
    const s = app.status.toLowerCase();
    if (s.includes("shortlist")) countShortlisted++;
    else if (s.includes("interview")) countInterview++;
    else if (s.includes("select")) countSelected++;
  });

  // Update Summary Cards
  const summaryCards = document.querySelectorAll(".summary-card strong");
  if (summaryCards.length >= 4) {
    summaryCards[0].textContent = countTotal;
    summaryCards[1].textContent = countShortlisted;
    summaryCards[2].textContent = countInterview;
    summaryCards[3].textContent = countSelected;
  }

  // 2. Render Table Rows
  tbody.innerHTML = "";
  if (apps.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding: 20px; color:#6B7280;">No applications submitted yet. Visit Placement Drives to apply!</td></tr>`;
    return;
  }

  apps.forEach(function (app) {
    const statusClass = app.status.toLowerCase();
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><strong>${escapeHtml(app.companyName)}</strong></td>
      <td>${escapeHtml(app.appliedDate)}</td>
      <td><span class="status ${statusClass}">${escapeHtml(app.status)}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}