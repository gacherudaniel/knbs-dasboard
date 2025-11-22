@"

# KNBS Quality Report Dashboard

A modern React + TypeScript dashboard for Kenya National Bureau of Statistics quality reports.

## Features

- Quality report sections (Accuracy, Relevance, Methodology, etc.)
- KNBS branded color scheme
- Responsive design with Tailwind CSS
- Component-based architecture

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`
"@ | Out-File -FilePath README.md -Encoding utf8

git add README.md
git commit -m "Add README"
git push
