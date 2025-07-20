#!/bin/bash

# Azure Static Web Apps Automated Deployment Script
# This script automates the deployment of your portfolio to Azure

set -e  # Exit on any error

echo "🚀 Starting Azure Static Web Apps Deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
RESOURCE_GROUP="maheswari-portfolio-rg"
LOCATION="eastus"
STATIC_WEB_APP_NAME="maheswari-portfolio"
GITHUB_REPO="https://github.com/maheswarim-work/maheswari-manoharan-ai-portfolio"
BRANCH="main"

# Function to check if Azure CLI is installed
check_azure_cli() {
    if ! command -v az &> /dev/null; then
        echo -e "${RED}Azure CLI is not installed. Please install it first:${NC}"
        echo "https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
        exit 1
    fi
    echo -e "${GREEN}✓ Azure CLI found${NC}"
}

# Function to check if logged in to Azure
check_azure_login() {
    if ! az account show &> /dev/null; then
        echo -e "${BLUE}Please log in to Azure...${NC}"
        az login
    fi
    echo -e "${GREEN}✓ Logged in to Azure${NC}"
}

# Function to create resource group
create_resource_group() {
    echo -e "${BLUE}Creating resource group: $RESOURCE_GROUP...${NC}"
    if az group exists --name $RESOURCE_GROUP | grep -q "true"; then
        echo -e "${GREEN}✓ Resource group already exists${NC}"
    else
        az group create --name $RESOURCE_GROUP --location $LOCATION
        echo -e "${GREEN}✓ Resource group created${NC}"
    fi
}

# Function to create static web app
create_static_web_app() {
    echo -e "${BLUE}Creating Static Web App: $STATIC_WEB_APP_NAME...${NC}"
    
    # Check if the app already exists
    if az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
        echo -e "${GREEN}✓ Static Web App already exists${NC}"
        
        # Get the deployment URL
        DEPLOYMENT_URL=$(az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv)
        echo -e "${GREEN}✓ Your app URL: https://$DEPLOYMENT_URL${NC}"
    else
        # Create the static web app
        echo "Creating new Static Web App..."
        az staticwebapp create \
            --name $STATIC_WEB_APP_NAME \
            --resource-group $RESOURCE_GROUP \
            --source $GITHUB_REPO \
            --location $LOCATION \
            --branch $BRANCH \
            --app-location "/" \
            --output-location "out" \
            --login-with-github
        
        echo -e "${GREEN}✓ Static Web App created successfully!${NC}"
        
        # Get the deployment URL
        DEPLOYMENT_URL=$(az staticwebapp show --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "defaultHostname" -o tsv)
        echo -e "${GREEN}✓ Your app URL: https://$DEPLOYMENT_URL${NC}"
    fi
}

# Function to get deployment status
check_deployment_status() {
    echo -e "${BLUE}Checking deployment status...${NC}"
    
    # Get the deployment token (for manual deployment if needed)
    DEPLOYMENT_TOKEN=$(az staticwebapp secrets list --name $STATIC_WEB_APP_NAME --resource-group $RESOURCE_GROUP --query "properties.apiKey" -o tsv)
    
    echo -e "${GREEN}✓ Deployment token retrieved (stored securely)${NC}"
    echo -e "${BLUE}GitHub Actions will handle automatic deployments${NC}"
}

# Function to display next steps
display_next_steps() {
    echo ""
    echo -e "${GREEN}🎉 Deployment Setup Complete!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. GitHub Actions workflow has been added to your repository"
    echo "2. Check the Actions tab in your GitHub repository for deployment progress"
    echo "3. Your site will be available at: https://$DEPLOYMENT_URL"
    echo "4. Future pushes to the 'main' branch will trigger automatic deployments"
    echo ""
    echo "To manually trigger a deployment:"
    echo "  - Push changes to the main branch"
    echo "  - Or go to GitHub Actions and manually run the workflow"
}

# Main execution
main() {
    echo "======================================"
    echo "Azure Static Web Apps Deployment"
    echo "======================================"
    echo ""
    
    # Run all checks and setup
    check_azure_cli
    check_azure_login
    create_resource_group
    create_static_web_app
    check_deployment_status
    display_next_steps
}

# Run the script
main