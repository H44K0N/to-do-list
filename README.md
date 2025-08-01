# Space-Themed To-Do List

A fast, responsive task manager with a clean futuristic UI. Built to explore optimistic UI updates, subtle animations, and full-stack integration with authentication and database.

---

## ✦ Motivation

This project was created to strengthen my skills in building full-stack applications with a focus on user experience. I wanted it to feel instant and smooth — both visually and functionally — while handling real-time data, authentication, and animation challenges.

---

## ✦ Tech Stack

- **Frontend**: React, TypeScript, Vite, CSS Modules, Framer Motion  
- **Backend**: Supabase (PostgreSQL, Auth, REST API)  
- **Other**: UUID (for optimistic updates), RLS (row-level security for data isolation)

---

## ✦ Features

- Login & Register (with Supabase Auth)  
- Add, complete, and delete tasks  
- Optimistic UI: instant local feedback on task creation  
- Animated task transitions (entry, completion, and deletion)  
- Vibrating strike-through for marking tasks as done  
- Per-user task visibility (thanks to RLS)  
- Clean dark mode with glow effects for that space vibe

---

## ✦ Challenges & Solutions

**✅ Optimistic UI Handling**  
When a task is added, it appears instantly with a temporary ID. Once Supabase responds, the task is updated. If the request fails, it's removed and the user is notified.

**✅ Visual Feedback**  
Completion triggers a glowing strike-through line, soft fade-out, and a slight vibration to give the user clear, satisfying feedback.

**✅ Data Access Control**  
Supabase RLS policies ensure each user can only access their own tasks — enforced both in the frontend and database.

**✅ Animation Syncing**  
Animations are consistent for both optimistic and confirmed tasks, preventing confusion or visual "glitches."

---

## ✦ Possible Improvements

- Grouping tasks by tag or project  
- Drag-and-drop task reordering  
- Light/dark theme toggle  
- Offline cache or syncing

---

**Built by [H44K0N](https://github.com/H44K0N) – 2025**
# Space-Themed To-Do List

A fast, responsive task manager with a clean futuristic UI. Built to explore optimistic UI updates, subtle animations, and full-stack integration with authentication and database.

---

## ✦ Motivation

This project was created to strengthen my skills in building full-stack applications with a focus on user experience. I wanted it to feel instant and smooth — both visually and functionally — while handling real-time data, authentication, and animation challenges.

---

## ✦ Tech Stack

- **Frontend**: React, TypeScript, Vite, CSS Modules, Framer Motion  
- **Backend**: Supabase (PostgreSQL, Auth, REST API)  
- **Other**: UUID (for optimistic updates), RLS (row-level security for data isolation)

---

## ✦ Features

- Login & Register (with Supabase Auth)  
- Add, complete, and delete tasks  
- Optimistic UI: instant local feedback on task creation  
- Animated task transitions (entry, completion, and deletion)  
- Vibrating strike-through for marking tasks as done  
- Per-user task visibility (thanks to RLS)  
- Clean dark mode with glow effects for that space vibe

---

## ✦ Challenges & Solutions

**✅ Optimistic UI Handling**  
When a task is added, it appears instantly with a temporary ID. Once Supabase responds, the task is updated. If the request fails, it's removed and the user is notified.

**✅ Visual Feedback**  
Completion triggers a glowing strike-through line, soft fade-out, and a slight vibration to give the user clear, satisfying feedback.

**✅ Data Access Control**  
Supabase RLS policies ensure each user can only access their own tasks — enforced both in the frontend and database.

**✅ Animation Syncing**  
Animations are consistent for both optimistic and confirmed tasks, preventing confusion or visual "glitches."

---

## ✦ Possible Improvements

- Grouping tasks by tag or project  
- Drag-and-drop task reordering  
- Light/dark theme toggle  
- Offline cache or syncing

---

**Built by [H44K0N](https://github.com/H44K0N) – 2025**

