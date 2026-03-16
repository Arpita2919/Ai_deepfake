# DeepScan Frontend — AI Image Authenticity Check

A React-based web application that allows users to upload images and receive an AI-generated authenticity probability score based on model analysis, artifact detection, and metadata inspection.

## Overview

This frontend implements the following workflow:

1. **User uploads** an image or a single video frame
2. **System preprocesses** the media (handled by backend: resizing, normalization, metadata extraction)
3. **Pre-trained AI model** analyzes the input on the backend
4. **Detection** checks for AI-generated artifacts (texture inconsistencies, abnormal patterns, missing metadata)
5. **Probability calculation** of AI generation is performed
6. **Results** are displayed in a clear, understandable format

## Tech Stack

- **React 19** — UI framework
- **axios** — HTTP client for API calls
- **react-dropzone** — Drag & drop file upload
- **Create React App** — Build tooling

## Project Structure

```
deepscan-frontend/
├── public/
│   └── index.html            # Includes Plus Jakarta Sans font
├── src/
│   ├── services/
│   │   └── api.js            # Backend API bridge
│   ├── components/
│   │   ├── Navbar.jsx        # Floating navbar with nav links & CTA buttons
│   │   ├── UploadZone.jsx    # Main upload & analysis UI
│   │   ├── ConfidenceMeter.jsx # Visual score bar
│   │   ├── ResultCard.jsx    # Verdict & score breakdown
│   │   └── MetadataPanel.jsx # EXIF details
│   ├── App.js
│   ├── App.css               # CSS variables, BEM-style classes
│   ├── index.js
│   └── index.css             # Base styles, smooth scroll
└── package.json
```

## Components

### 1. `services/api.js` — Backend Bridge

- Uses `axios.post` to send the image as `FormData` to the Express backend
- Exports one function: `analyzeImage(file)`
- Endpoint: `POST /api/analyze`
- Base URL configurable via `REACT_APP_API_BASE_URL` (default: `http://localhost:5000`)

### 2. `Navbar.jsx` — Floating Navbar

- **Floating bar** — Light pill-shaped bar with backdrop blur, inset from top
- **Logo pill** — "DeepScan" in a light-gray pill with navy text
- **Nav links** — How it works, Features, About (smooth scroll to analyzer)
- **Action buttons** — "Learn more" (secondary), "Try now" (primary CTA); both scroll to upload section
- Accepts scroll-to behavior via `#analyzer` anchor

### 3. `UploadZone.jsx` — Core Upload & Analysis

- Uses `react-dropzone` for drag & drop image upload
- Single file only; accepts images (`image/*`)
- **Image preview** via `URL.createObjectURL(file)` (with proper cleanup on unmount)
- **State**: `file`, `previewUrl`, `loading`, `result`, `error`
- **On submit** → calls `analyzeImage()` from `api.js`
- Displays loading state ("Analyzing...") and error messages
- Renders `ResultCard` and `MetadataPanel` when analysis completes
- Accepts optional `id` prop for scroll anchoring (e.g. `id="analyzer"`)

### 4. `ConfidenceMeter.jsx` — Visual Score Bar

- Accepts `score` (0–100) as a prop
- CSS width animation: `width: ${score}%` with 0.6s transition
- **Color logic**:
  - Green (`#2e7d32`) if score &lt; 50
  - Yellow (`#f9a825`) if 50–70
  - Red (`#e64a19`) if &gt; 70
- Displays "AI Probability: X.X%"
- Handles undefined/NaN with 0% fallback

### 5. `ResultCard.jsx` — Verdict Display

- **Props**: `score`, `verdict`, `model_score`, `artifact_score`, `metadata_score`
- Shows verdict label (e.g. "Likely AI-Generated" / "Likely Authentic")
- Renders `ConfidenceMeter` for the main score
- Score breakdown grid: Model Score, Artifact Score, Metadata Score
- Handles missing values with `--` fallback

### 6. `MetadataPanel.jsx` — EXIF Details

- Accepts `metadata` object as prop
- Displays: Camera Make, Camera Model, Software, Timestamp
- **Anomaly highlighting**: missing values shown in red with "Missing" label
- Uses `MetadataRow` sub-component for consistent row styling

## UI & Styling

- **Typography** — Plus Jakarta Sans (Google Fonts) for a professional look
- **CSS variables** — Centralized colors, shadows, border radii in `App.css`
- **Color palette** — Navy primary (`#1e3a5f`), light gray background, subtle borders
- **Navbar** — Floating, rounded bar with pill logo and CTA buttons
- **Cards** — White surfaces with light borders and soft shadows
- **Responsive** — Grid and navbar adapt for smaller screens

## Environment Configuration

Create a `.env` file in the project root to override the backend URL:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Replace with your actual backend URL when deploying (e.g. `https://api.yoursite.com`).

## Getting Started

### Prerequisites

- Node.js 18+
- Backend server running (see project root for backend setup)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000). The app will reload when you edit files.

**If `npm start` fails** (e.g. due to npm/Python path issues), run directly with Node:

```bash
node node_modules/react-scripts/bin/react-scripts.js start
```

### Build for Production

```bash
npm run build
```

Outputs optimized static files to the `build/` folder.

### Run Tests

```bash
npm test
```

## Backend Integration

The frontend expects the backend to:

- Expose `POST /api/analyze` accepting `multipart/form-data` with an `image` field
- Return JSON. For full UI display, the preferred shape is:

```json
{
  "score": 72.5,
  "verdict": "Likely AI-Generated",
  "model_score": 75,
  "artifact_score": 68,
  "metadata_score": 74,
  "metadata": {
    "camera_make": "Canon",
    "camera_model": "EOS R5",
    "software": "Adobe Lightroom",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

If the backend returns a different format, the frontend shows placeholders (e.g. "Pending", "--", "Missing") for missing fields.

Ensure the backend is running (default `http://localhost:5000`) before analyzing images.
