# Donation Site

A Next.js donation landing page with Lightning payment integration via moneydevkit.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory with:
   ```
   MDK_ACCESS_TOKEN=your_api_key_here
   MDK_MNEMONIC=your_mnemonic_here
   ```
   
   Get your credentials from [moneydevkit.com](https://moneydevkit.com) or run:
   ```bash
   npx @moneydevkit/create
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `MDK_ACCESS_TOKEN`
   - `MDK_MNEMONIC`
4. Deploy!

Vercel will automatically detect Next.js and configure the deployment.

## Features

- Three donation buttons: $10, $100, and $1,000 USD
- Lightning payment integration via moneydevkit
- Success page with payment confirmation
- Responsive design

## Project Structure

```
├── app/
│   ├── page.js              # Main donation page
│   ├── layout.js            # Root layout
│   ├── globals.css          # Global styles
│   ├── api/
│   │   └── mdk/
│   │       └── route.js     # moneydevkit API endpoint
│   └── checkout/
│       ├── [id]/
│       │   └── page.js      # Checkout page
│       └── success/
│           ├── page.js      # Success page
│           └── success.css  # Success page styles
├── next.config.js           # Next.js configuration
└── package.json
```
