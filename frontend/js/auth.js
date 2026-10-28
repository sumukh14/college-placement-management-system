
document.addEventListener("DOMContentLoaded", function () {
  handleStudentLoginForm();
  handleAdminLoginForm();
  syncDynamicUser();
  setupLogout();
});

/* ================= 1. Student Login Form Validation ================= */
function handleStudentLoginForm() {
  const form = document.querySelector('form[action="dashboard.html"]') || document.querySelector("form");
  const nameInput = document.getElementById("studentName");
  const rollInput = document.getElementById("rollNo");
  const passInput = document.getElementById("password");

  if (!form || !nameInput || !rollInput) return;

  // Error message placeholder
  let errorMsg = document.getElementById("loginError");
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.id = "loginError";
    errorMsg.style.cssText = "color: #EF4444; font-size: 13px; font-weight: 600; text-align: center; margin: 12px 0; display: none; background: #FEE2E2; padding: 8px 12px; border-radius: 6px;";
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) form.insertBefore(errorMsg, submitBtn);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const pass = passInput ? passInput.value.trim() : "";

    // Validation: Letters and spaces only
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name) || name.length < 2) {
      showError(errorMsg, "⚠️ Name must contain letters only (minimum 2 characters).");
      nameInput.focus();
      return;
    }

    // Validation: 6 to 12 digits for Roll Number
    if (!/^\d{6,12}$/.test(roll)) {
      showError(errorMsg, "⚠️ Roll Number must be between 6 and 12 digits.");
      rollInput.focus();
      return;
    }

        // Validation: Strong Password Pattern (min 8 chars, letters, numbers, and special character)
    const passCheck = checkPasswordPattern(pass);
    if (!passCheck.valid) {
      showError(errorMsg, passCheck.message);
      if (passInput) passInput.focus();
      return;
    }

    // Save Active Session in localStorage
    const emailFormatted = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`;
    const userSession = {
      role: "student",
      name: name,
      rollNo: roll,
      email: emailFormatted,
      degree: "B.Tech",
      branch: "CSE",
      cpi: 7.6,
      backlogs: 0
    };

    localStorage.setItem("currentUser", JSON.stringify(userSession));
    localStorage.setItem("cc_student_profile", JSON.stringify(userSession));

    // Redirect to Dashboard
    window.location.href = "dashboard.html";
  });
}

/* ================= 2. Admin Login Form Validation ================= */
function handleAdminLoginForm() {
  const form = document.querySelector('form[action="admin-dashboard.html"]');
  const staffInput = document.getElementById("staffId");
  const passInput = document.getElementById("adminPassword");

  if (!form || !staffInput) return;

  let errorMsg = document.getElementById("adminLoginError");
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.id = "adminLoginError";
    errorMsg.style.cssText = "color: #EF4444; font-size: 13px; font-weight: 600; text-align: center; margin: 12px 0; display: none; background: #FEE2E2; padding: 8px 12px; border-radius: 6px;";
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) form.insertBefore(errorMsg, submitBtn);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const staffId = staffInput.value.trim();
    const pass = passInput ? passInput.value.trim() : "";

    if (staffId.length < 4) {
      showError(errorMsg, "⚠️ Please enter a valid Staff ID or Email.");
      staffInput.focus();
      return;
    }

    if (pass.length < 4) {
      showError(errorMsg, "⚠️ Password must be at least 4 characters long.");
      if (passInput) passInput.focus();
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify({
      role: "admin",
      name: "Admin Officer",
      staffId: staffId
    }));

    window.location.href = "admin-dashboard.html";
  });
}

function showError(elem, text) {
  elem.textContent = text;
  elem.style.display = "block";
}

function checkPasswordPattern(pass) {
  if (pass.length < 8) {
    return { valid: false, message: "⚠️ Password must be at least 8 characters long." };
  }
  if (!/[a-zA-Z]/.test(pass)) {
    return { valid: false, message: "⚠️ Password must contain at least one letter." };
  }
  if (!/\d/.test(pass)) {
    return { valid: false, message: "⚠️ Password must contain at least one number (0-9)." };
  }
  if (!/[!@#$%^&*(),.?":{}|<>_\-+=\\/\[\]~`]/.test(pass)) {
    return { valid: false, message: "⚠️ Password must contain at least one special character (e.g. @, #, $, !, %)." };
  }
  return { valid: true };
}

/* ================= 3. Global Dynamic User Sync ================= */
function syncDynamicUser() {
  const storedUser = localStorage.getItem("currentUser");
  if (!storedUser) return;

  let user;
  try {
    user = JSON.parse(storedUser);
  } catch (err) {
    return;
  }

  if (!user || !user.name) return;

  const initials = getInitials(user.name);

  // A. Topbar Navbar (All Pages)
  const userChip = document.querySelector(".topbar .user-chip");
  if (userChip) {
    const avatar = userChip.querySelector(".avatar");
    const nameSpan = userChip.querySelector("span:last-child");
    if (avatar) avatar.textContent = initials;
    if (nameSpan) nameSpan.textContent = user.name;
  }

  // B. Resume Page (resume.html)
  const resumePhoto = document.querySelector(".resume-header .profile-photo");
  if (resumePhoto) {
    resumePhoto.textContent = initials;
  }

  const resumeName = document.querySelector(".resume-header h1");
  if (resumeName) {
    resumeName.textContent = user.name;
  }

  const resumeContact = document.querySelector(".resume-header .contact");
  if (resumeContact && user.email) {
    const phoneEmailPara = resumeContact.querySelectorAll("p")[1];
    if (phoneEmailPara) {
      phoneEmailPara.textContent = `+91 98XXXXXXXX · ${user.email}`;
    }
  }

  // C. Application Status Page (application-status.html)
  const statusInfoCard = document.querySelector(".student-info");
  if (statusInfoCard) {
    const statusAvatar = statusInfoCard.querySelector(".avatar");
    const statusName = statusInfoCard.querySelector("h2");
    const statusRoll = statusInfoCard.querySelector("p");

    if (statusAvatar) statusAvatar.textContent = initials;
    if (statusName) statusName.textContent = user.name;
    if (statusRoll && user.rollNo) {
      statusRoll.textContent = `Roll No: ${user.rollNo} | ${user.branch || "CSE"}`;
    }
  }

  // D. Dashboard Welcome Greeting (dashboard.html)
  const welcomeH2 = document.querySelector(".welcome h2");
  if (welcomeH2 && user.name && user.role !== "admin") {
    welcomeH2.textContent = `Welcome, ${user.name} 👋`;
  }

  // E. Profile Page (profile.html)
  const profileHeroAvatar = document.querySelector(".profile-hero .big-avatar");
  if (profileHeroAvatar) profileHeroAvatar.textContent = initials;

  const profileHeroName = document.querySelector(".profile-hero .identity h2");
  if (profileHeroName) profileHeroName.textContent = user.name;

  const enrollmentMeta = document.querySelector(".meta-line span:first-child");
  if (enrollmentMeta && user.rollNo) {
    enrollmentMeta.textContent = `Enrollment: ${user.rollNo}`;
  }

  document.querySelectorAll(".detail-grid .detail").forEach(function (detail) {
    const label = detail.querySelector("span")?.textContent?.trim().toLowerCase();
    const strong = detail.querySelector("strong");
    if (!strong) return;

    if (label?.includes("full name")) strong.textContent = user.name;
    if (label?.includes("roll number") && user.rollNo) strong.textContent = user.rollNo;
    if (label?.includes("email") && user.email) strong.textContent = user.email;
  });
}

function getInitials(fullName) {
  if (!fullName) return "SK";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ================= 4. Logout Session Handler ================= */
function setupLogout() {
  document.querySelectorAll('a[href*="index.html"]').forEach(function (link) {
    if (link.textContent.toLowerCase().includes("logout")) {
      link.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
      });
    }
  });
}