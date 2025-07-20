# Azure Static Web Apps Automated Deployment Script (PowerShell)
# This script automates the deployment of your portfolio to Azure

$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting Azure Static Web Apps Deployment..." -ForegroundColor Green

# Configuration
$RESOURCE_GROUP = "maheswari-portfolio-rg"
$LOCATION = "eastus"
$STATIC_WEB_APP_NAME = "maheswari-portfolio"
$GITHUB_REPO = "https://github.com/maheswarim-work/maheswari-manoharan-ai-portfolio"
$BRANCH = "main"

# Function to check if Azure CLI is installed
function Check-AzureCLI {
    try {
        $null = az --version
        Write-Host "✓ Azure CLI found" -ForegroundColor Green
    }
    catch {
        Write-Host "Azure CLI is not installed. Please install it first:" -ForegroundColor Red
        Write-Host "https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
        exit 1
    }
}

# Function to check if logged in to Azure
function Check-AzureLogin {
    $account = az account show 2>$null
    if (-not $account) {
        Write-Host "Please log in to Azure..." -ForegroundColor Blue
        az login
    }
    Write-Host "✓ Logged in to Azure" -ForegroundColor Green
}

# Function to create resource group
function Create-ResourceGroup {
    Write-Host "Creating resource group: $RESOURCE_GROUP..." -ForegroundColor Blue
    
    $exists = az group exists --name $RESOURCE_GROUP
    if ($exists -eq "true") {
        Write-Host "✓ Resource group already exists" -ForegroundColor Green
    }
    else {
        az group create --name $RESOURCE_GROUP --location $LOCATION
        Write-Host "✓ Resource group created" -ForegroundColor Green
    }
}

# Function to create static web app
function Create-StaticWebApp {
    Write-Host "Creating Static Web App: $STATIC_WEB_APP_NAME..." -ForegroundColor Blue
    
    # Check if the app already exists
    $app = az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP 2>$null
    
    if ($app) {
        Write-Host "✓ Static Web App already exists" -ForegroundColor Green
        
        # Get the deployment URL
        $DEPLOYMENT_URL = az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv
        Write-Host "✓ Your app URL: https://$DEPLOYMENT_URL" -ForegroundColor Green
    }
    else {
        # Create the static web app
        Write-Host "Creating new Static Web App..."
        az staticwebapp create `
            --name $STATIC_WEB_APP_NAME `
            --resource-group $RESOURCE_GROUP `
            --source $GITHUB_REPO `
            --location $LOCATION `
            --branch $BRANCH `
            --app-location "/" `
            --output-location "out" `
            --login-with-github
        
        Write-Host "✓ Static Web App created successfully!" -ForegroundColor Green
        
        # Get the deployment URL
        $DEPLOYMENT_URL = az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv
        Write-Host "✓ Your app URL: https://$DEPLOYMENT_URL" -ForegroundColor Green
    }
}

# Function to display next steps
function Display-NextSteps {
    Write-Host ""
    Write-Host "🎉 Deployment Setup Complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. GitHub Actions workflow has been added to your repository"
    Write-Host "2. Check the Actions tab in your GitHub repository for deployment progress"
    Write-Host "3. Your site will be available at the URL shown above"
    Write-Host "4. Future pushes to the 'main' branch will trigger automatic deployments"
    Write-Host ""
}

# Main execution
Write-Host "======================================"
Write-Host "Azure Static Web Apps Deployment"
Write-Host "======================================"
Write-Host ""

Check-AzureCLI
Check-AzureLogin
Create-ResourceGroup
Create-StaticWebApp
Display-NextSteps