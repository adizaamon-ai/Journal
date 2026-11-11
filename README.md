# 🌸 ClassBloom

### Every Student Has a Story. Every Improvement Matters.

ClassBloom is a **teacher-only** student performance management platform and digital teaching journal. It replaces paper journals and basic Excel tables with a modern evaluation, analytics, and recognition system.

> *"Do not just record what students achieve. Record how they grow."*

Students do **not** need accounts, phones, or computers. The teacher enters all data, and ClassBloom turns it into statistics, graphs, rankings, achievements, calendars, and reports.

---

## 📸 Screenshots

> Add your pictures to the `docs/images/` folder and they will appear below automatically.
> See [How to add pictures](#-how-to-add-pictures) for step-by-step instructions.

| Dashboard | Evaluation Journal |
|---|---|
| ![Dashboard](docs/images/dashboard.png) | ![Evaluation Journal](docs/images/evaluation-journal.png) |

| Student Profile | Leaderboard |
|---|---|
| ![Student Profile](docs/images/student-profile.png) | ![Leaderboard](docs/images/leaderboard.png) |

| Performance Calendar | Reports & Certificates |
|---|---|
| ![Calendar](docs/images/calendar.png) | ![Reports](docs/images/reports.png) |

---

## ✨ Features

- **Overview Dashboard**: key statistics, performance charts, top performers, and private teacher alerts
- **Classroom Management**: unlimited classrooms, transfers, archiving, per-class statistics
- **Student Management**: profiles with photo upload, search, filters, archive/restore
- **Individual Student Profile**: interactive graphs, history tabs, growth timeline
- **Digital Evaluation Journal**: spreadsheet-style entry, draft → preview → publish workflow, weighted grading, audit trail for corrections
- **Leaderboard**: weighted rankings with gold, silver, and bronze recognition
- **Achievement Center**: configurable badges, XP, and levels
- **Performance Calendar**: GitHub-style heatmap with daily detail panel
- **Smart Teacher Alerts**: private, non-judgmental suggestions
- **Teacher's Private Notes**: observations and follow-up dates
- **Skill Radar**: Listening, Speaking, Reading, Writing, Grammar, Vocabulary
- **Hall of Fame**: weekly and monthly recognition archive
- **Reports & Certificates**: export to PDF, Excel, and CSV
- **Data Tools**: CSV/Excel import, backup and restore

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide |
| Backend | Supabase (PostgreSQL, Auth, Storage) |
| Security | Row Level Security, private image storage, server-side validation |

---

## 🎨 Design Palette

| Role | Color |
|---|---|
| Primary (Deep Navy) | `#18243A` |
| Secondary (Lavender) | `#8B7CF6` |
| Accent (Sky Blue) | `#5DADE2` |
| Success | `#39A878` |
| Warning | `#F2B84B` |
| Background | `#F7F8FC` |
| Text | `#252A38` |

---

## 🚀 Getting Started

### 1. Create the database (5 minutes, free)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste the whole file `supabase/migrations/001_schema.sql`, and click **Run**.
   This creates all tables, security rules, the private photo storage, and the server-side logic
   (rankings, XP, achievements, publishing, corrections, backup/restore, demo data).
3. Open **Project Settings → API** and copy the **Project URL** and the **anon public key**.

### 2. Run locally

```bash
npm install
cp .env.example .env      # then paste your Supabase URL and anon key into .env
npm run dev
```

Open http://localhost:5173, click **Create account** once (this is your teacher account), and sign in.
Afterwards set `VITE_ALLOW_SIGNUP=false` (and disable sign-ups in Supabase → Authentication → Providers → Email)
so nobody else can register.

Want to look around first? In **Settings → Data tools** you can load clearly labelled demo data and remove it again with one click.

### 3. Publish online with GitHub Pages (optional)

1. Push this project to GitHub.
2. In the repository go to **Settings → Secrets and variables → Actions** and add two secrets:
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Go to **Settings → Pages → Source: GitHub Actions**.
4. Every push to `main` now builds and deploys the site automatically.

> The anon key is designed to be public. Your data is protected by Row Level Security, so only a signed-in teacher can read it.

---

## 🖼 How to Add Pictures

### Option A: Upload through the GitHub website (easiest)

1. Open your repository on GitHub.
2. Click **Add file → Create new file**.
3. In the name box, type `docs/images/` and then any file name, for example `docs/images/dashboard.png`. Typing the `/` creates the folder.
4. Instead, click **Add file → Upload files**, drag your screenshots in, and commit. (If you used the upload button, make sure the images end up inside `docs/images/`.)
5. Name your files exactly as used in this README:
   - `dashboard.png`
   - `evaluation-journal.png`
   - `student-profile.png`
   - `leaderboard.png`
   - `calendar.png`
   - `reports.png`
6. Commit the changes. The pictures will show up in the README.

### Option B: Drag and drop directly into the README

1. Open `README.md` on GitHub and click the ✏️ **Edit** button.
2. Drag an image from your computer into the editor.
3. GitHub uploads it and inserts the image link for you.
4. Click **Commit changes**.

### Option C: Using Git

```bash
mkdir -p docs/images
# copy your screenshots into docs/images/
git add docs/images
git commit -m "Add screenshots"
git push
```

### Add your logo (optional)

Upload a file called `logo.png` to `docs/images/` and add this at the top of the README:

```markdown
<p align="center">
  <img src="docs/images/logo.png" alt="ClassBloom logo" width="160">
</p>
```

---

## 📁 Project Structure

```
classbloom/
├── docs/
│   └── images/          # README screenshots go here
├── src/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   └── main.tsx
├── supabase/
│   └── migrations/001_schema.sql
├── .github/workflows/deploy.yml
├── .env.example
├── package.json
└── README.md
```

---

## 🔒 Privacy and Security

- Teacher-only authentication; there are no student accounts
- Student photographs and academic data are stored privately
- Published evaluations are never silently overwritten. Every correction records the original value, new value, date, and reason
- Students are archived rather than deleted, and historical records are preserved

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

<p align="center">Made with 💜 for teachers who care about every student's growth.</p>
