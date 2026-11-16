# MedMaster

A preclinical medical quiz app: Practice, Exam Simulator, Daily Challenge, Slide Review, Multiplayer, a mistake notebook and a spaced-repetition review deck.

The site is plain files hosted on GitHub Pages. Accounts, progress, the question bank and the app's settings live in Supabase.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page |
| `style.css` | All colours and layout (light and dark) |
| `supabase.js` | Everything that talks to the database |
| `script.js` | The app: sign-in, study modes, XP, progress |
| `multiplayer.js` | Live quiz rooms |
| `admin.js` | Question Manager and Settings (admins only) |
| `questions.js` | Backup copy of the question bank. Used for the one-time import, and as a fallback if the database cannot be reached |
| `setup.sql` | Run once in Supabase. Not part of the website |

## First-time setup

Do these once, in this order.

### 1. Register your own account
Open the current MedMaster site and create an account with your email, if you do not already have one.

### 2. Run the database script
1. Supabase dashboard → your project → **SQL Editor** → **New query**.
2. Paste the whole of `setup.sql`.
3. Near the top, replace `YOUR_EMAIL_HERE` with the email from step 1 (keep the quotes).
4. Press **Run**. The result should say `MedMaster setup complete`.

It is safe to run again. It does not touch the existing `rooms`, `user_progress`, `daily_challenge` or `questions` tables.

### 3. Fix email sign-in (Supabase dashboard)
Supabase's built-in email sender is for testing only: it sends about 2 emails an hour and only to members of your Supabase team, so ordinary students never receive confirmation or reset emails.

**Authentication → URL Configuration**
- **Site URL**: the address of the MedMaster site, for example `https://abdulquddusodusote-ux.github.io/medmaster1.0/`
- **Redirect URLs**: add the same address.

Then choose one:

- **Quick option.** Authentication → Sign In / Providers → Email → switch **Confirm email** off. New accounts work immediately and the app sends students straight in. "Forgot password" emails will still not reach students until you do the proper option.
- **Proper option.** Create a free account with an email service such as Brevo or Resend, then enter its details under Authentication → Emails → **SMTP Settings** (enable custom SMTP). Confirmation and password-reset emails then reach everyone. You can leave **Confirm email** on or off.

The app handles both: if a confirmation email is required it says so and offers "Send it again"; if not, it signs the student in at once.

### 4. Upload the files
In the GitHub repository, upload `index.html`, `style.css`, `supabase.js`, `script.js`, `multiplayer.js`, `admin.js`, `questions.js` and `README.md`, replacing the old ones. (`setup.sql` can be uploaded too for safekeeping; the site does not use it.)

### 5. Import the question bank
1. Open the site and sign in with your admin account.
2. Menu → **Question Manager** → **Import & backup** → **Import existing bank**.
3. Wait for "Import complete". If it is interrupted, press it again; nothing is duplicated.

### 6. Check it works (5 minutes)
- [ ] Reload the page while signed in: you go straight to the dashboard, with no sign-in screen flashing first.
- [ ] Sign out, then sign in again: your XP and history are still there.
- [ ] Register a second test account with another email: it either goes straight in, or shows "we sent a confirmation link" and the email actually arrives.
- [ ] As the test account, the menu has no Question Manager or Settings.
- [ ] As admin, add one question in Question Manager. Reload the site on another phone or a private window: the menu's question count has gone up by one.
- [ ] Do a 10-question practice: XP rises by 2 per correct answer plus 10 at the end. Repeat the same questions: no extra XP for them today.
- [ ] Finish the Daily Challenge while signed in: your name appears on the leaderboard.

## Adding questions

Everything is done in **Question Manager**. New questions are live as soon as you save.

- **Add one**: fill in the form. Type a new course, topic or sub-topic name to create it.
- **Paste many**: paste a batch in plain text, press **Check and preview**, then **Add the valid questions**. Example:

```
Course: Physiology
Topic: Renal Physiology
Sub-topic: Glomerular Filtration

Q: Which force opposes glomerular filtration?
A) Glomerular hydrostatic pressure
*B) Bowman's capsule hydrostatic pressure
C) Bowman's capsule oncotic pressure
D) Renal blood flow
Explanation: Capsular hydrostatic pressure pushes fluid back.

Q: The macula densa senses sodium chloride.
Answer: True
Explanation: It signals the juxtaglomerular cells.

Type: Fill in the blank
Q: The functional unit of the kidney is the ____.
Answer: nephron | nephrons
Explanation: Each kidney has about a million.
```

  Mark the correct option with `*`, or add a line `Answer: B`. The course and topic lines apply to every question below them until you change them. Do not type IDs; the database assigns them.
- **Browse & edit**: find, correct or retire a question. Retired questions are hidden from students but kept.
- **Rename**: rename or merge a course, topic or sub-topic everywhere at once.
- **Reports**: problems students flagged with "Report a problem".
- **Import & backup**: "Download questions.js" saves the current bank. Upload it to GitHub occasionally so the backup stays current.

## Changing how the app works

**Settings** (admins only) controls the app name and wording, which study modes are on, question limits and timers, question types and their XP, XP rules, level names and thresholds, labels, course order and hidden courses, and who the admins are. Changes reach students the next time they open the app.

A new question type that only differs in name or marks (for example "Past exam MCQ") is added in Settings and needs no code.

## For whoever edits the code later

- **Publishing a change:** raise the version number in `index.html` (`window.MM_VERSION` and every `?v=`), so phones fetch the new files.
- **A question type with new behaviour** (matching, ordering…): add one entry to `QTYPE_BASES` in `script.js` and one to `ANSWER_EDITORS` in `admin.js`. Practice, Exam, Daily, Slide Review, the review deck and the Question Manager pick it up.
- **A new setting:** add its starting value to `DEFAULT_SETTINGS` in `script.js` and one `F(...)` line in the Settings screen in `admin.js`.
- **Colours:** the two blocks at the top of `style.css`.
- Every piece of text shown on the page goes through `esc()`. Keep it that way.

## Known limits

- Multiplayer depends on the host keeping the tab open and connected.
- Leaderboard scores are worked out on the student's device.
- The free Supabase plan pauses a project after a period with no activity; open the dashboard to wake it.
