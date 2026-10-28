
const DEFAULT_COMPANIES = [
  {
    id: "infosys",
    name: "Infosys",
    role: "Systems Engineer",
    pkg: "₹3.6 LPA",
    location: "Pan India",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE", "EEE"],
    driveDate: "15 Oct 2026",
    statusBadge: "Applications Open",
    badgeClass: "open",
    logoText: "in",
    logoClass: "infosys"
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    pkg: "₹3.8 LPA",
    location: "Multiple Cities",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE", "EEE"],
    driveDate: "22 Oct 2026",
    statusBadge: "Applications Open",
    badgeClass: "open",
    logoText: "T",
    logoClass: "tcs"
  },
  {
    id: "accenture",
    name: "Accenture",
    role: "Associate Software Engineer",
    pkg: "₹4.5 LPA",
    location: "Pan India",
    minCpi: 7.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "29 Oct 2026",
    statusBadge: "Completed",
    badgeClass: "completed",
    logoText: "A",
    logoClass: "accenture"
  },
  {
    id: "capgemini",
    name: "Capgemini",
    role: "Analyst",
    pkg: "₹4.0 LPA",
    location: "Multiple Cities",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE", "EEE"],
    driveDate: "05 Nov 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "C",
    logoClass: "capgemini"
  },
  {
    id: "deloitte",
    name: "Deloitte",
    role: "Technology Analyst",
    pkg: "₹6.0 LPA",
    location: "Multiple Cities",
    minCpi: 7.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "12 Nov 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "D",
    logoClass: "deloitte"
  },
  {
    id: "goldman-sachs",
    name: "Goldman Sachs",
    role: "Engineering Analyst",
    pkg: "₹15 LPA",
    location: "Bengaluru",
    minCpi: 8.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "19 Nov 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "GS",
    logoClass: "goldman"
  },
  {
    id: "thales",
    name: "Thales",
    role: "Cybersecurity / Software Engineer",
    pkg: "₹7.0 LPA",
    location: "Bengaluru",
    minCpi: 7.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "26 Nov 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "TH",
    logoClass: "thales"
  },
  {
    id: "cisco",
    name: "Cisco",
    role: "Software Engineer",
    pkg: "₹12 LPA",
    location: "Bengaluru",
    minCpi: 7.5,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "03 Dec 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "CS",
    logoClass: "cisco"
  },
  {
    id: "wipro",
    name: "Wipro",
    role: "Project Engineer",
    pkg: "₹3.5 LPA",
    location: "Pan India",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE", "EEE"],
    driveDate: "10 Dec 2026",
    statusBadge: "Interview in Progress",
    badgeClass: "interview",
    logoText: "W",
    logoClass: "wipro"
  },
  {
    id: "cognizant",
    name: "Cognizant",
    role: "Programmer Analyst",
    pkg: "₹4.0 LPA",
    location: "Multiple Cities",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "17 Dec 2026",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "CG",
    logoClass: "cognizant"
  },
  {
    id: "hcltech",
    name: "HCLTech",
    role: "Graduate Engineer Trainee",
    pkg: "₹4.0 LPA",
    location: "Pan India",
    minCpi: 6.0,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE", "EEE"],
    driveDate: "07 Jan 2027",
    statusBadge: "Completed",
    badgeClass: "completed",
    logoText: "H",
    logoClass: "hcl"
  },
  {
    id: "ibm",
    name: "IBM",
    role: "Associate System Engineer",
    pkg: "₹4.5 LPA",
    location: "Multiple Cities",
    minCpi: 6.5,
    backlogs: "No active backlogs",
    maxBacklogs: 0,
    branches: ["CSE", "IT", "ECE"],
    driveDate: "14 Jan 2027",
    statusBadge: "Upcoming",
    badgeClass: "upcoming",
    logoText: "IBM",
    logoClass: "ibm"
  }
];

const DEFAULT_APPLICATIONS = [
  { id: "app-1", companyName: "Infosys", appliedDate: "15 Sep 2026", status: "Shortlisted" },
  { id: "app-2", companyName: "Tata Consultancy Services", appliedDate: "18 Sep 2026", status: "Interview" },
  { id: "app-3", companyName: "Wipro", appliedDate: "20 Sep 2026", status: "Selected" },
  { id: "app-4", companyName: "Cognizant", appliedDate: "22 Sep 2026", status: "Applied" },
  { id: "app-5", companyName: "Accenture", appliedDate: "25 Sep 2026", status: "Rejected" }
];

const DEFAULT_STUDENT = {
  name: "Sumit Sharma",
  rollNo: "2415001243",
  email: "sumit.student@example.com",
  degree: "B.Tech",
  branch: "CSE",
  cpi: 7.6,
  backlogs: 0
};

// Version control to ensure the 12 companies refresh in localStorage
const DATA_VERSION = "2.0";

function initDataStore() {
  const currentVer = localStorage.getItem("cc_data_version");
  if (currentVer !== DATA_VERSION) {
    localStorage.setItem("cc_companies", JSON.stringify(DEFAULT_COMPANIES));
    localStorage.setItem("cc_data_version", DATA_VERSION);
  }

  if (!localStorage.getItem("cc_applications")) {
    localStorage.setItem("cc_applications", JSON.stringify(DEFAULT_APPLICATIONS));
  }

  if (!localStorage.getItem("cc_student_profile")) {
    localStorage.setItem("cc_student_profile", JSON.stringify(DEFAULT_STUDENT));
  }
}

initDataStore();

/* ================= Storage Access Helpers ================= */

function getCompanies() {
  return JSON.parse(localStorage.getItem("cc_companies")) || DEFAULT_COMPANIES;
}

function saveCompanies(companies) {
  localStorage.setItem("cc_companies", JSON.stringify(companies));
}

function addCompany(newCompany) {
  const list = getCompanies();
  list.push(newCompany);
  saveCompanies(list);
  return list;
}

function getApplications() {
  return JSON.parse(localStorage.getItem("cc_applications")) || DEFAULT_APPLICATIONS;
}

function saveApplications(apps) {
  localStorage.setItem("cc_applications", JSON.stringify(apps));
}

function getStudentProfile() {
  return JSON.parse(localStorage.getItem("cc_student_profile")) || DEFAULT_STUDENT;
}

function saveStudentProfile(profile) {
  localStorage.setItem("cc_student_profile", JSON.stringify(profile));
}

/* ================= Admin "Add Company" Form Listener ================= */
document.addEventListener("DOMContentLoaded", function () {
  const addForm = document.querySelector(".company-form");
  if (!addForm) return;

  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("company-name");
    const roleInput = document.getElementById("job-role");
    const pkgInput = document.getElementById("package");
    const locInput = document.getElementById("location");
    const cgpaInput = document.getElementById("cgpa");
    const backlogsInput = document.getElementById("backlogs");
    const branchesInput = document.getElementById("branches");
    const dateInput = document.getElementById("drive-date");

    if (!nameInput || !nameInput.value.trim()) {
      alert("Please enter a company name.");
      return;
    }

    const companyObj = {
      id: nameInput.value.trim().toLowerCase().replace(/\s+/g, "-"),
      name: nameInput.value.trim(),
      role: roleInput ? roleInput.value.trim() : "Software Engineer",
      pkg: pkgInput ? pkgInput.value.trim() : "₹6.0 LPA",
      location: locInput ? locInput.value.trim() : "Pan India",
      minCpi: cgpaInput ? parseFloat(cgpaInput.value) || 6.0 : 6.0,
      backlogs: backlogsInput ? backlogsInput.value.trim() : "No active backlogs",
      maxBacklogs: 0,
      branches: branchesInput
        ? branchesInput.value.split(",").map(b => b.trim().toUpperCase())
        : ["CSE", "IT"],
      driveDate: dateInput && dateInput.value ? dateInput.value : "TBD",
      statusBadge: "Upcoming",
      badgeClass: "upcoming",
      logoText: nameInput.value.trim().substring(0, 2).toUpperCase(),
      logoClass: "custom"
    };

    addCompany(companyObj);
    alert(`✓ "${companyObj.name}" added successfully to placement drives!`);
    addForm.reset();
  });
});