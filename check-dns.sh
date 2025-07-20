#!/bin/bash

# DNS Configuration Checker for maheswari-manoharan.ai

echo "🔍 Checking DNS Configuration for maheswari-manoharan.ai"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if dig is available
if ! command -v dig &> /dev/null; then
    echo -e "${RED}❌ 'dig' command not found. Please install dnsutils.${NC}"
    exit 1
fi

echo "1. Checking TXT records (for Azure validation):"
echo "----------------------------------------------"
dig +short TXT maheswari-manoharan.ai
echo ""

echo "2. Checking CNAME record for root domain:"
echo "-----------------------------------------"
dig +short CNAME maheswari-manoharan.ai
echo ""

echo "3. Checking A records:"
echo "----------------------"
dig +short A maheswari-manoharan.ai
echo ""

echo "4. Checking www subdomain:"
echo "--------------------------"
dig +short CNAME www.maheswari-manoharan.ai
echo ""

echo "5. Testing HTTPS connectivity:"
echo "------------------------------"
if curl -Is https://maheswari-manoharan.ai | head -n 1 | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✅ HTTPS is working!${NC}"
else
    echo -e "${YELLOW}⚠️  HTTPS not yet responding (this is normal if DNS is still propagating)${NC}"
fi
echo ""

echo "6. Current Azure Static Web App URL:"
echo "------------------------------------"
if curl -Is https://lemon-wave-00592680f.2.azurestaticapps.net | head -n 1 | grep -q "200"; then
    echo -e "${GREEN}✅ Azure app is live and responding${NC}"
else
    echo -e "${RED}❌ Azure app not responding${NC}"
fi
echo ""

echo "📝 Notes:"
echo "- DNS propagation can take 5-30 minutes"
echo "- Make sure Cloudflare proxy is DISABLED (gray cloud) for Azure Static Web Apps"
echo "- If you see no results above, DNS might still be propagating"