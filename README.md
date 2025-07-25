# React Tiptap Comments

## Description

A modern collaborative editor with comments, built on Tiptap and Liveblocks. Supports multi-user editing, block comments, and a responsive interface.

## Project Structure

- `src/types/` — TypeScript types (users, editor, props)
- `src/constants/` — constants (users, editor options, ROOM_ID)
- `src/utils/` — utilities (getUser, addBlockComment, etc.)
- `src/components/` — components:
  - `Editor/` — editor and subcomponents (Header, UserSelector)
  - `Threads/` — comments
  - `Spinner/` — spinner
- `src/hooks/` — custom hooks (e.g., useIsMobile)
- `src/hocs/` — HOCs for Liveblocks providers
- `src/icons/` — icons
- `src/extensions/` — Tiptap extensions
- `src/globals.css`, `src/text-editor.css`, ... — styles

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How the Editor Works

- Main editor logic: `src/components/Editor/Editor.tsx`
- Editor options: `src/constants/editor.ts`
- Add block comment: utility `addBlockComment` (`src/utils/editor.ts`)
- Header and user selection: separate components (`Header`, `UserSelector`)

## Extending Functionality

- Add new types in `src/types/`
- Add new constants in `src/constants/`
- Add new utilities in `src/utils/`
- Add new components in the appropriate subfolders in `src/components/`

---

## Linting

```bash
npm run lint
```

## Build

```bash
npm run build
```
