
Copy
# 📂 Savannah Informatics Assessment - Photo Album Explorer

<div align="center">
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/-Tanstack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="Tanstack Query">
  <img src="https://img.shields.io/badge/-OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="OAuth">
</div>

## 🚀 Overview

A secure photo album explorer built with Next.js that provides authentication via Google/GitHub and a seamless browsing experience.

🔗 **Live Demo:** [https://savannah-albums.vercel.app](https://savannah-albums.vercel.app)  
*(Requires GitHub or Google sign-in)*

<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
<strong>✨ Key Features:</strong>
<ul>
  <li>🔒 Secure authentication with Google/GitHub OAuth</li>
  <li>📱 Fully responsive design for all devices</li>
  <li>✏️ Real-time photo title editing</li>
  <li>⚡ Optimized data fetching with Tanstack Query</li>
  
</ul>
</div>

## 🛠️ Technology Stack

| Category       | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | Next.js 15, TypeScript, Tailwind CSS, Tanstack Query                         |
| **Backend**    | Next.js API Routes, MongoDB, Mongoose                                        |
| **Authentication** | NextAuth.js (Google/GitHub OAuth)                                       |
| **Testing**    | Jest, React Testing Library                                                  |
| **CI/CD**      | GitHub Actions, Vercel                                                       |

## 📌 Prerequisites

- Node.js v20+
- npm v11+ 
- MongoDB Atlas account
- Google OAuth credentials
- GitHub OAuth credentials

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/njau58/savannah_albums.git

# Navigate to project directory
cd savannah_informatics_assessment

# Install dependencies
npm install
# or
yarn install
⚙️ Environment Setup
Create a .env.local file in the root directory with the following variables:

env
Copy
# Authentication
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Database
MONGO_URI=your_mongodb_connection_string
🚀 Running the Application
bash
Copy
# Start development server
npm run dev
# or
yarn dev
The application will be available at http://localhost:3000

🧪 Testing
bash
Copy
# Run all tests
npm test
# or
yarn test

# Run tests in watch mode
npm run test:watch
# or
yarn test:watch