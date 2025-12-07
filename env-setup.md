# Email Configuration Setup

Create a file called `.env.local` in the root of the project with these settings:

```
# SMTP Settings for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password

# Where to receive form submissions
CONTACT_EMAIL=everett@futuredetail.com
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" as the app and "Windows Computer" as device
4. Click **Generate**
5. Copy the 16-character password (remove spaces)
6. Use that password as `SMTP_PASS`

## For Vercel Deployment

Add these as Environment Variables in your Vercel project settings:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

