# Creating the OG Image for LinkedIn

## Quick Options:

### Option 1: Use the HTML Generator (Recommended)
1. Open in your browser: `public/generate-og.html`
2. You'll see a beautiful preview of your OG image
3. Click "Download OG Image (1200x630)"
4. Save the file as `og-image.png` in the `public` folder
5. Commit and push to git

### Option 2: Use an Online Tool
Create a 1200x630px image using:
- **Canva**: https://www.canva.com/create/linkedin-posts/
  - Search for "LinkedIn Article Cover" template
  - Use your brand colors: #ec4899 (pink)
  
- **Figma**: Free design tool
  - Create a 1200x630px frame
  - Add your content

### Option 3: Convert the SVG
1. An SVG placeholder is available at `public/og-placeholder.svg`
2. Convert it to PNG using:
   - https://svgtopng.com/
   - https://cloudconvert.com/svg-to-png

## Design Requirements:
- **Size**: 1200x630 pixels (LinkedIn's recommended)
- **Content**: Your name, title, tech stack
- **Colors**: Pink gradient to match your portfolio
- **File name**: Must be `og-image.png` in the public folder

## After Creating the Image:
```bash
# Add the image to git
git add public/og-image.png
git commit -m "Add OG image for LinkedIn"
git push origin main
```

Then test with LinkedIn Post Inspector:
https://www.linkedin.com/post-inspector/