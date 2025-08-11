# 📧 Email Setup Guide for Contact Form

## 🚀 Quick Setup

### Step 1: Choose Your Email Service

#### Option A: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the generated 16-character password

#### Option B: Outlook/Hotmail

1. Use your regular Outlook credentials
2. Make sure "Less secure app access" is enabled (if required)

#### Option C: SMTP2GO (Professional)

1. Sign up at [SMTP2GO](https://www.smtp2go.com/)
2. Get your SMTP credentials from dashboard

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# For Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# For Outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-regular-password
RECIPIENT_EMAIL=your-email@outlook.com

# For SMTP2GO
SMTP2GO_USER=your-smtp2go-username
SMTP2GO_PASSWORD=your-smtp2go-password
RECIPIENT_EMAIL=your-email@domain.com
```

### Step 3: Update Email Service (Optional)

If not using Gmail, update `lib/email.ts`:

```typescript
// Change this line to use your preferred service
const config = outlookConfig; // or smtp2goConfig
```

## 🧪 Testing

Test your email configuration:

```bash
# Test the contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "service": "Web Development",
    "budget": "$10K - $25K",
    "description": "Test email functionality"
  }'
```

## 📧 What Emails Are Sent

### 1. Admin Notification Email (to you)

- **Subject**: "🚀 New Contact: [Service] - [Name]"
- **Content**: Formatted form details with all user information
- **Features**:
  - Beautiful HTML design
  - Direct reply-to user's email
  - All form fields clearly displayed

### 2. Auto-Reply Email (to user)

- **Subject**: "Thank you for your inquiry, [Name]! 🚀"
- **Content**: Professional thank you message
- **Features**:
  - Confirmation of received inquiry
  - Next steps information
  - Your contact details

## 🔧 Email Features

✅ **HTML & Plain Text** - Professional formatting  
✅ **Reply-To Header** - Reply directly to users  
✅ **Auto-Reply** - Confirms receipt to users  
✅ **Error Handling** - Graceful fallbacks  
✅ **Template Customization** - Easy to modify  
✅ **Multiple Providers** - Gmail, Outlook, SMTP2GO support

## 🛠️ Customization

### Modify Email Templates

Edit templates in `lib/email.ts`:

```typescript
// Update your company details
const autoReplyHTML = `
  <div class="footer">
    <p><strong>YOUR COMPANY</strong> - Your Tagline</p>
    <p>your-email@domain.com | +1 (555) 123-4567</p>
  </div>
`;
```

### Change Email Styling

Modify the CSS in the email templates to match your brand colors and fonts.

### Add More Fields

Update the email templates to include additional form fields if you add them to your contact form.

## 🔒 Security Notes

- ✅ Never commit `.env.local` to git
- ✅ Use App Passwords for Gmail (more secure)
- ✅ Rotate passwords regularly
- ✅ Monitor email sending quotas
- ✅ Consider using professional SMTP services for production

## 🎯 Production Tips

1. **Use Professional SMTP**: Services like SMTP2GO, SendGrid, or Mailgun
2. **Monitor Delivery**: Check spam folders and delivery rates
3. **Email Verification**: Consider adding email verification for users
4. **Rate Limiting**: Implement rate limiting to prevent spam
5. **Logging**: Monitor email sending success/failure rates

## 📊 Expected Response

Successful API response includes email status:

```json
{
  "message": "Contact form submitted successfully",
  "id": "uuid-here",
  "emailSent": true,
  "autoReplySent": true
}
```

The contact form now automatically sends emails on every submission! 🎉
