

document.addEventListener("DOMContentLoaded", function () {
  setupInteractiveDrives();
});

function setupInteractiveDrives() {
  const profile = getStudentProfile();
  const applications = getApplications();
  const appliedCompanyNames = applications.map(a => a.companyName.toLowerCase());

  const cards = document.querySelectorAll(".company-card");
  if (!cards.length) return;

  cards.forEach(function (card) {
    const titleElem = card.querySelector("h3");
    if (!titleElem) return;

    const companyName = titleElem.textContent.trim();
    const isAlreadyApplied = appliedCompanyNames.includes(companyName.toLowerCase());

 
    const badge = card.querySelector(".badge");
    const isEligible = profile.cpi >= 6.5;

    if (badge) {
      if (isEligible) {
        badge.className = "badge eligible";
        badge.textContent = "Eligible";
      } else {
        badge.className = "badge not-eligible";
        badge.textContent = "Not Eligible";
        badge.style.background = "#FEE2E2";
        badge.style.color = "#DC2626";
      }
    }

    // 2. Button State & Action
    const actionsContainer = card.querySelector(".card-actions") || card;
    const registerToggle = card.querySelector(".register-toggle");
    const registerLabel = card.querySelector(".register-btn");

    if (isAlreadyApplied) {
      if (registerLabel) {
        registerLabel.textContent = "✓ Applied";
        registerLabel.style.pointerEvents = "none";
        registerLabel.style.opacity = "0.7";
        registerLabel.style.background = "#22C55E";
      }
    } else {
      if (registerToggle && registerLabel) {
        registerToggle.addEventListener("change", function () {
          if (this.checked) {
            handleApply(companyName, registerLabel);
          }
        });
      }
    }
  });
}

function handleApply(companyName, buttonElem) {
  const currentApps = getApplications();
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  // Add new application with initial status
  currentApps.push({
    id: "app-" + Date.now(),
    companyName: companyName,
    appliedDate: today,
    status: "Applied"
  });

  saveApplications(currentApps);

  if (buttonElem) {
    buttonElem.textContent = "✓ Applied";
    buttonElem.style.background = "#22C55E";
    buttonElem.style.pointerEvents = "none";
  }
}