<div align="center">

# KNBS Dashboard

### Kenya National Bureau of Statistics

#### Quality Assurance & Metadata Management Platform

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Features](#features) • [Installation](#installation) • [Documentation](#documentation) • [Contact](#contact)

</div>

---

## Overview

A comprehensive, modern web application providing unified access to Kenya's National Statistical System (NSS) quality frameworks, statistical reports, classifications, and documentation. Built with cutting-edge technologies for optimal performance and user experience.

## Features

### Quality Frameworks

<table>
<tr>
<td width="33%">

**KeSQAF**
<br>
Kenya Statistical Quality Assurance Framework

- 19 Principles
- 4 Levels (A, B, C, D)
- Implementation Tools

</td>
<td width="33%">

**KeSCoP**
<br>
Kenya Statistical Code of Practice

- 3 Pillars
- 12 Principles
- Best Practices

</td>
<td width="33%">

**KSPM**
<br>
Kenya Statistical Planning Manual

- Planning Guidelines
- Methodologies
- Standards

</td>
</tr>
</table>

### Metadata Management

- **Quality Reports** - Comprehensive quality assessments (Poverty & Inequality, CPI)
- **Classifications** - National & international statistical classifications
- **Codelists** - Standardized code lists for statistical operations
- **Statistical Dictionary** - Integrated Quarto-based reference documentation

### Key Capabilities

- Dynamic product switching for quality reports
- Smart compact navigation for enhanced readability
- Modular component architecture
- Professional KNBS brand styling
- Fully responsive design
- Fast loading with Vite

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Quarto** - Statistical documentation (R-based)

## Project Structure

\`\`\`bash
src/
├── components/ # Reusable components
├── pages/ # Page components
├── styles/ # Global styles
├── utils/ # Utility functions
└── App.tsx # Main app component
\`\`\`

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

# Configuration

KNBS Brand Colors
The dashboard uses KNBS official colors defined in tailwind.config.js:

Primary: #b06443 (knbs-500)
Full palette: knbs-50 through knbs-900
Compact Navigation
Certain pages automatically switch to compact navigation mode for better readability:

Quality Reports (/metadata/quality-reports)
Dictionary (/metadata/dictionary)
KeSQAF (/quality/kesqaf)
Code of Practice (/quality/code-of-practice)
Quality Frameworks
KeSQAF Structure
Level A: Managing Statistical System (3 principles)
Level B: Managing Institutional Environment (6 principles)
Level C: Managing Statistical Processes (4 principles)
Level D: Managing Statistical Outputs (6 principles)
Implementation: Tools, roadmap, and resources

KeSCoP Structure
Pillar 1: Professionalism (4 principles)
Pillar 2: Impartiality (4 principles)
Pillar 3: Progressiveness (4 principles)
Statistical Dictionary
The statistical dictionary is powered by Quarto and embedded via iframe.

Local Development

# In your R/Quarto project directory

quarto preview

Default URL: http://localhost:5784

Adding Search to Quarto Book
Add to your \_quarto.yml:

website:
search: true

Contributing
When adding new quality reports or framework sections:

Create section components in appropriate subfolder
Update main container with navigation items
Follow existing component patterns (PrincipleCard, etc.)
Use KNBS color scheme consistently
Ensure TypeScript types are properly defined
License
© 2024 Kenya National Bureau of Statistics. All rights reserved.

Contact
Kenya National Bureau of Statistics

Website: https://www.knbs.or.ke
Email: info@knbs.or.ke
