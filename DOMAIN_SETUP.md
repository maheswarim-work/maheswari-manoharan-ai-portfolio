# Custom Domain Setup: maheswari-manoharan.ai

This guide will help you connect your Cloudflare domain to your Azure Static Web App.

## Step 1: Add Custom Domain in Azure

1. **Go to Azure Portal**: https://portal.azure.com
2. **Navigate to your Static Web App**: maheswari-portfolio
3. **Click on "Custom domains"** in the left sidebar
4. **Click "+ Add"**
5. **Enter domain**: `maheswari-manoharan.ai`
6. **Domain type**: Select "Custom domain on other DNS"
7. **Click "Next"**

Azure will show you a **validation token** that looks like:
```
Hostname: maheswari-manoharan.ai
Value: [validation-token-here]
```

**IMPORTANT**: Keep this page open! You'll need this token for Cloudflare.

## Step 2: Configure Cloudflare DNS

1. **Log in to Cloudflare**: https://dash.cloudflare.com
2. **Select your domain**: maheswari-manoharan.ai
3. **Go to DNS** settings

### Add the validation record:
- **Type**: TXT
- **Name**: `@` (or leave blank for root domain)
- **Content**: [paste the validation token from Azure]
- **TTL**: Auto
- **Proxy status**: DNS only (gray cloud)
- **Save**

### Add the CNAME record:
- **Type**: CNAME
- **Name**: `@` (for root domain)
- **Target**: `lemon-wave-00592680f.2.azurestaticapps.net`
- **TTL**: Auto
- **Proxy status**: DNS only (gray cloud) - IMPORTANT!
- **Save**

**Note**: If Cloudflare doesn't allow CNAME on root, use CNAME flattening or create an A record instead.

### For www subdomain (optional):
- **Type**: CNAME
- **Name**: `www`
- **Target**: `lemon-wave-00592680f.2.azurestaticapps.net`
- **TTL**: Auto
- **Proxy status**: DNS only (gray cloud)
- **Save**

## Step 3: Validate in Azure

1. **Go back to Azure Portal**
2. **Click "Validate"** on the custom domain page
3. **Wait for validation** (can take 5-10 minutes)
4. Once validated, **click "Add"**

## Step 4: SSL/HTTPS Configuration

Azure Static Web Apps automatically provides SSL certificates for custom domains. No additional configuration needed!

## Important Cloudflare Settings

Make sure these Cloudflare settings are configured:

1. **SSL/TLS**: Set to "Full" or "Full (strict)"
2. **Always Use HTTPS**: Turn ON
3. **Automatic HTTPS Rewrites**: Turn ON

## DNS Propagation

- DNS changes can take up to 48 hours to propagate globally
- Usually happens within 5-30 minutes
- Check status at: https://www.whatsmydns.net/

## Troubleshooting

### If validation fails:
1. Ensure the TXT record is correctly added in Cloudflare
2. Wait 10 minutes and try validation again
3. Make sure Cloudflare proxy (orange cloud) is DISABLED for the records

### If site doesn't load:
1. Check that CNAME proxy is disabled (gray cloud)
2. Verify SSL/TLS setting is "Full" in Cloudflare
3. Clear browser cache
4. Wait for DNS propagation

### Alternative: Using Cloudflare Pages Rule
If you need to keep Cloudflare proxy enabled:
1. Create a Page Rule for `*maheswari-manoharan.ai/*`
2. Set SSL to "Full"
3. Set Cache Level to "Standard"

## Final URLs

Once configured, your portfolio will be accessible at:
- https://maheswari-manoharan.ai
- https://www.maheswari-manoharan.ai (if configured)

Both will serve your portfolio with automatic SSL!