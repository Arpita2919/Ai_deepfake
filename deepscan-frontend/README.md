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
├── src/
│   ├── services/
│   │   └── api.js              # Backend API bridge
│   ├── components/
│   │   ├── Navbar.jsx          # App header / logo
│   │   ├── UploadZone.jsx      # Main upload & analysis UI
│   │   ├── ConfidenceMeter.jsx # Visual score bar
│   │   ├── ResultCard.jsx      # Verdict & score breakdown
│   │   └── MetadataPanel.jsx   # EXIF details
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Components

### 1. `services/api.js` — Backend Bridge

- Uses `axios.post` to send the image as `FormData` to the Express backend
- Exports one function: `analyzeImage(file)`
- Endpoint: `POST /api/analyze`
- Base URL configurable via `REACT_APP_API_BASE_URL` (default: `http://localhost:5000`)

### 2. `Navbar.jsx` — App Header

- Simple header with app name/logo: **DeepScan AI Detector**
- Dark background styling for clear visual separation

### 3. `UploadZone.jsx` — Core Upload & Analysis

- Uses `react-dropzone` for drag & drop image upload
- Single file only; accepts images (`image/*`)
- **Image preview** via `URL.createObjectURL(file)` (with proper cleanup on unmount)
- **State**: `file`, `previewUrl`, `loading`, `result`, `error`
- **On submit** → calls `analyzeImage()` from `api.js`
- Displays loading state ("Analyzing...") and error messages
- Renders `ResultCard` and `MetadataPanel` when analysis completes

### 4. `ConfidenceMeter.jsx` — Visual Score Bar

- Accepts `score` (0–100) as a prop
- CSS width animation: `width: ${score}%` with 0.6s transition
- **Color logic**:
  - Green (`#2e7d32`) if score &lt; 50
  - Yellow (`#f9a825`) if 50–70
  - Red (`#e64a19`) if &gt; 70
- Displays "AI Probability: X.X%"

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
- Return JSON in this shape:

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

Ensure the backend is running (default `http://localhost:5000`) before analyzing images.

## Styling

- Styles are defined in `App.css` using BEM-like class names
- Light theme with indigo accents; cards with soft shadows
- Responsive grid for results on smaller screens (`minmax(280px, 1fr)`)
