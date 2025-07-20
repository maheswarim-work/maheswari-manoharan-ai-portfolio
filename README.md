# Maheswari Manoharan - AI Portfolio

Personal portfolio website for Maheswari Manoharan, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🌐 Deployed on Azure Static Web Apps

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/maheswari-manoharan-ai-portfolio.git
cd maheswari-manoharan-ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files for deployment

## Deployment to Azure Static Web Apps

This project is configured for automatic deployment to Azure Static Web Apps using GitHub Actions.

### Setup Azure Deployment

1. Create an Azure Static Web App in the Azure Portal
2. During creation, connect your GitHub repository
3. Azure will automatically add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret to your repository
4. The GitHub Actions workflow will trigger on pushes to the main branch

### Manual Deployment

To build the static files locally:
```bash
npm run export
```

The static files will be generated in the `out` directory.

## Project Structure

```
├── app/
│   ├── components/     # React components
│   ├── data/          # Portfolio data
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── public/            # Static assets
├── .github/
│   └── workflows/     # GitHub Actions workflows
├── next.config.ts     # Next.js configuration
└── package.json       # Project dependencies
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Icons
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) - Hosting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Maheswari Manoharan - [LinkedIn](https://www.linkedin.com/in/maheswarimanoharan/)

Project Link: [https://github.com/yourusername/maheswari-manoharan-ai-portfolio](https://github.com/yourusername/maheswari-manoharan-ai-portfolio)
