# Quick Deploy Guide 🚀

## One-Time Setup (5 minutes)

### 1. Install Azure CLI
- **Mac**: `brew install azure-cli`
- **Windows**: Download from [Azure CLI installer](https://aka.ms/installazurecliwindows)
- **Linux**: `curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash`

### 2. Run the Deployment Script

**Mac/Linux:**
```bash
./deploy.sh
```

**Windows PowerShell:**
```powershell
./deploy.ps1
```

The script will:
- ✅ Check for Azure CLI
- ✅ Log you into Azure (browser will open)
- ✅ Create a resource group
- ✅ Create your Static Web App
- ✅ Connect it to your GitHub repository
- ✅ Set up automatic deployments

## That's it! 🎉

Your portfolio will be live in about 2-5 minutes at:
`https://maheswari-portfolio.azurestaticapps.net`

## Future Updates

Just push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically deploy your changes!

## Manual Deployment Trigger

Go to your GitHub repository:
1. Click on "Actions" tab
2. Select "Deploy to Azure Static Web Apps"
3. Click "Run workflow"

## Check Deployment Status

- **GitHub**: Check Actions tab for build status
- **Azure Portal**: View your Static Web App for deployment history

## Troubleshooting

If the script fails:
1. Make sure you have an Azure account (free tier works)
2. Ensure you're logged in: `az login`
3. Check that you have permissions to create resources

Need help? The deployment scripts have detailed error messages!