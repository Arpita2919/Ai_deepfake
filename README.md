# 🛡️ Deepfake / AI-Generated Media Verifier

### *Combating Misinformation through Lightweight AI Detection*

![status](https://img.shields.io/badge/status-prototype-blue) ![field](https://img.shields.io/badge/field-CS%20%26%20Application-orange) ![license](https://img.shields.io/badge/license-MIT-green)

Empowering users with a fast and accessible way to verify digital media and fight misinformation.

[Features](#-features) • [System Architecture](#-system-architecture) • [Workflow](#-project-workflow) • [Tech Stack](#-tech-stack) • [The Team](#-the-team)

---

## 🎯 Overview

[cite_start]The **Deepfake Verifier** is a lightweight system designed to verify if an uploaded image or video frame is AI-generated[cite: 16]. [cite_start]In an era of increasing digital scams, this tool helps users identify synthetic media by analyzing visual artifacts and metadata[cite: 17].

Whether for academic research or practical use, this system helps you:
* [cite_start]✅ **Identify** deepfakes to reduce the spread of misinformation[cite: 17].
* [cite_start]✅ **Analyze** image artifacts and metadata automatically[cite: 21].
* [cite_start]✅ **Verify** content through a simple, fast, and user-friendly interface[cite: 41, 47].

---

## 🏗️ System Architecture

[cite_start]The project follows a **Client-Server Architecture** designed for scalability and efficiency[cite: 41].



* [cite_start]**Frontend Layer:** Built with HTML, CSS, and JavaScript to provide a clean, simple UI[cite: 64].
* [cite_start]**Backend Layer:** Developed using Flask or Django to manage API requests and detection logic[cite: 53, 64].
* [cite_start]**AI Engine:** Utilizes OpenCV and TensorFlow/PyTorch to analyze patterns and texture inconsistencies[cite: 33, 64].
* [cite_start]**Metadata Module:** Extracts hidden file data to find traces of synthetic origin[cite: 31, 46].

---

## 🔄 Project Workflow

This workflow outlines the step-by-step path an image takes from upload to verification:



1.  [cite_start]**Media Upload:** User submits an image or a single video frame via the web interface[cite: 30, 37].
2.  [cite_start]**Preprocessing:** The system resizes and normalizes the media while extracting metadata[cite: 31].
3.  [cite_start]**Core Analysis:** A pre-trained lightweight AI model analyzes the input for texture inconsistencies and abnormal patterns[cite: 32, 33].
4.  [cite_start]**Probability Calculation:** The system calculates the likelihood of AI generation[cite: 34].
5.  [cite_start]**Result Delivery:** The final probability score (e.g., 72%) and source (Real/Synthetic) are displayed[cite: 35, 39, 40].

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Backend** | [cite_start]Python, Flask/Django [cite: 64] |
| **ML/CV** | [cite_start]TensorFlow, PyTorch, OpenCV [cite: 64] |
| **Frontend** | [cite_start]HTML, CSS, JavaScript [cite: 64] |
| **Resources** | [cite_start]Public Deepfake & AI Datasets [cite: 65] |

---

## 👥 The Team

* [cite_start]**Harshita Nagpal:** Frontend Development & UI Design[cite: 59].
* [cite_start]**Arpita Raj:** Backend Development & Image Processing[cite: 60].
* [cite_start]**Naman Singh:** Model Integration & Testing.
* [cite_start]**Anurag Singh:** Documentation & System Analysis[cite: 62].

[cite_start]**Mentor:** Mr. Abhishek Singh [cite: 10]  
[cite_start]**Submitted To:** Mr. Sanjay Madaan [cite: 6]

---

## ⚖️ Scope & Limitations
* [cite_start]**In Scope:** Detection of AI-generated images and single video frames[cite: 20].
* [cite_start]**Out of Scope:** Real-time video deepfake detection and forensic-level accuracy[cite: 24, 25].
