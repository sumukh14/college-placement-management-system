# College Placement and Career Management System

This is the frontend prototype of the project, built using only HTML and CSS as part of the B.Tech CSE 3rd-year synopsis at GLA University, Mathura. Below you will find two things:

1. How the work is split between the four team members.
2. Step by step instructions for working on your own branch and pushing it to GitHub.

---

## 1. Task Split

Each member should only work inside their own branch, and only touch the files listed for them. This keeps everyone's work separate and avoids merge conflicts.

| Member | Branch name | Files to edit | What to build |
|---|---|---|---|
| **Sumukh Dixit (Leader)** | `sumukh-admin-results` | `admin-dashboard.html`, `companies.html`, `results.html`, `index.html`, `style.css` | Admin dashboard (placement statistics), company & drive management page, final placement results page. Also responsible for the overall theme and reviewing/merging everyone's pull requests. |
| **Sumit Kumar Sharma** | `sumit-profile-drives` | `profile.html`, `placement-drives.html`, `interviews.html` | Student profile page, placement drive listing (with eligibility tags and company comparison view), and the interview schedule page. |
| **Sumit Kumar** | `sumitsharma-status-admin` | `application-status.html`, `students.html`, `applications.html` | Student application status page, and the admin-side student information and applications pages. |
| **Swarit Shukla** | `swarit-login-dashboard` | `login.html`, `dashboard.html`, `admin-login.html` | Student login page, student dashboard, admin login page. |

**Note on `style.css`:** only Sumukh should edit this file, since the theme is already set up. If you need a new style for your own page, add it at the very bottom of `style.css` under a comment with your name, for example:

```
/* ---- Extra styles for Sumit's profile page ---- */
```

This keeps everyone's additions easy to find and reduces the chance of two people editing the same lines at the same time.

---

## 2. Git Workflow (Step by Step)

Everyone except Sumukh should follow these steps.

### One-time setup

```
git clone https://github.com/sumukh14/College-Placement-and-Career-Management-System.git
cd College-Placement-and-Career-Management-System
```

### Before you start working, every time

```
git checkout main
git pull origin main
```

This makes sure you have the latest code that Sumukh or anyone else has already merged.

### Create your branch (only the first time)

```
git checkout -b your-branch-name
```

For example, Sumit would run:

```
git checkout -b sumit-profile-drives
```

### Do your work, then save it

Edit only the files assigned to you, then run:

```
git add .
git commit -m "Built the profile and placement drives pages"
git push origin your-branch-name
```

If it is your first time pushing that branch, use this instead:

```
git push -u origin your-branch-name
```

### Open a Pull Request (PR) on GitHub

1. Open the repository on GitHub.
2. You should see a banner saying "Compare & pull request" — click it.
3. Make sure the base branch is `main` and the compare branch is your branch.
4. Click "Create pull request".
5. Let Sumukh know your PR is ready.

### Sumukh's job (as leader)

1. Go to the "Pull requests" tab on GitHub.
2. Open each PR and check the changed files.
3. If everything looks fine, click "Merge pull request".
4. If GitHub shows a conflict (two people edited the same lines), sort it out together, or ask for help figuring it out.

### After a merge, everyone should update again

Once Sumukh merges someone's PR into `main`, everyone else should update their own copy:

```
git checkout main
git pull origin main
```

Doing this regularly keeps your branch close to `main` and avoids big conflicts later.

---

## 3. How to Test the Site Locally

This project is built purely with static HTML and CSS — there is no backend, database or JSON fetching involved at this stage. To view any page, simply double-click the relevant `.html` file (or `index.html` for the homepage) and it will open directly in your browser.

To check the responsive design properly:

1. Open the page in your browser.
2. Press `F12` (or right-click → Inspect) to open Developer Tools.
3. Toggle the device toolbar to preview the layout on desktop, tablet and mobile screen sizes.
