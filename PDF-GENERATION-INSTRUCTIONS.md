# PDF Generation Instructions

## Method 1: Browser Print-to-PDF (Easiest - Recommended)

1. **Open the journal in your browser:**
   - Open `index.html` in Chrome, Edge, or Firefox
   - Or run `npm run dev` and open the local server URL

2. **Wait for the journal to fully load:**
   - Wait until all pages are generated (check the console for completion messages)

3. **Print to PDF:**
   - Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
   - Select "Save as PDF" as the destination
   - In the settings:
     - **Paper size:** A5 (or Custom: 148mm x 210mm)
     - **Margins:** None
     - **Scale:** 100%
     - **Background graphics:** ✅ Enabled
   - Click "Save"
   - Name it: `Leverage-Journal-A5.pdf`

## Method 2: Automated PDF Generation (Using Puppeteer)

### Step 1: Install Puppeteer
```bash
npm install --save-dev puppeteer
```

### Step 2: Generate PDF
```bash
npm run pdf
```

This will create `Leverage-Journal-A5.pdf` in the project root.

**Note:** The automated script waits for the journal content to load before generating the PDF.

## Method 3: Using Online Tools

1. Open `index.html` in your browser
2. Wait for all content to load
3. Use browser extensions like:
   - **Chrome:** "Print Friendly & PDF"
   - **Firefox:** "Print to PDF"
   - Or use online services like HTML to PDF converters

## Troubleshooting

- **If pages are cut off:** Ensure margins are set to "None" in print settings
- **If QR codes don't appear:** Make sure "Background graphics" is enabled
- **If content is missing:** Wait longer for JavaScript to finish generating all pages
- **For best quality:** Use Chrome or Edge browser for PDF generation

