# Maheswari Manoharan - AI Portfolio

Personal portfolio website for Maheswari Manoharan, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Optimized for performance
- ☁️ Deployed on AWS (S3 + Optional CloudFront)
- 💰 Cost-optimized deployment (~$0.50/month)

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

## Deployment to AWS

This project is configured for **cost-optimized** automatic deployment to AWS using GitHub Actions.

### Cost Optimization

- **S3-only mode** (default): ~$0.50/month for low traffic
- **Optional CloudFront CDN**: +$1-2/month (only if global CDN needed)
- Lifecycle policies delete old versions after 7 days
- No manual commands required - fully automated via GitHub Actions

### Setup AWS Deployment

1. **Create IAM User**:
   - Go to AWS IAM Console → Users → Create user
   - User name: `gha-maheswari-portfolio`
   - Enable programmatic access only
   - Attach the policy from `iam-policy.json` (least-privilege permissions)
   - Save the Access Key ID and Secret Access Key

2. **Add GitHub Secrets** (Settings → Secrets and variables → Actions):
   ```
   AWS_ACCESS_KEY_ID: Your IAM user access key ID
   AWS_SECRET_ACCESS_KEY: Your IAM user secret access key
   ```

3. **Configure Region** (optional):
   - Default: `us-east-1`
   - Change in `.github/workflows/aws-deploy.yml` (line 14) if needed

4. **Deploy**:
   ```bash
   git add .
   git commit -m "Deploy to AWS"
   git push origin main
   ```

5. **First Deployment**:
   - GitHub Actions automatically creates CloudFormation stack
   - Sets up S3 bucket with public website hosting
   - Builds and deploys the site
   - Check Actions tab for website URL

6. **Subsequent Deployments**:
   - Just push to main branch
   - GitHub Actions handles build and deployment automatically

### Infrastructure

The `aws-infrastructure.yml` CloudFormation template creates:
- S3 bucket with public website hosting
- Versioning enabled with 7-day lifecycle cleanup
- Optional CloudFront distribution (disabled by default for cost)

### Enabling CloudFront (Optional)

For HTTPS and global CDN:
1. Edit `.github/workflows/aws-deploy.yml` line 61
2. Change `ParameterValue=false` to `ParameterValue=true`
3. Push changes

### Local Build

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
- [AWS S3](https://aws.amazon.com/s3/) - Static website hosting
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - Infrastructure as Code

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Maheswari Manoharan - [LinkedIn](https://www.linkedin.com/in/maheswarimanoharan/)

Project Link: [https://github.com/yourusername/maheswari-manoharan-ai-portfolio](https://github.com/yourusername/maheswari-manoharan-ai-portfolio)
