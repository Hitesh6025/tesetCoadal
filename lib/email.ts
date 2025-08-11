import nodemailer from 'nodemailer'

// Email configuration interface
interface EmailConfig {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }
}

// Contact form data interface
interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    phone?: string
    company?: string
    service: string
    budget: string
    description: string
}

// Create email transporter
const createTransporter = () => {
    // Configure your email service here
    // Example configurations for popular services:

    // Gmail configuration
    const gmailConfig: EmailConfig = {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER || '',
            pass: process.env.EMAIL_PASSWORD || '', // Use App Password for Gmail
        }
    }

    // SMTP2GO configuration (alternative)
    const smtp2goConfig: EmailConfig = {
        host: 'mail.smtp2go.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP2GO_USER || '',
            pass: process.env.SMTP2GO_PASSWORD || '',
        }
    }

    // Outlook/Hotmail configuration
    const outlookConfig: EmailConfig = {
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER || '',
            pass: process.env.EMAIL_PASSWORD || '',
        }
    }

    // Use Gmail by default, but you can switch to any service
    const config = gmailConfig

    return nodemailer.createTransport(config)
}

// Generate HTML email template
const generateEmailHTML = (data: ContactFormData): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #d946ef, #9333ea); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background: #1f2937; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border-left: 4px solid #d946ef; }
        .highlight { background: linear-gradient(135deg, #d946ef, #9333ea); color: white; padding: 2px 8px; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact Form Submission</h1>
          <p>You've received a new inquiry from your website!</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Full Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          
          ${data.phone ? `
          <div class="field">
            <div class="label">📱 Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          ` : ''}
          
          ${data.company ? `
          <div class="field">
            <div class="label">🏢 Company:</div>
            <div class="value">${data.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">🛠️ Service Interest:</div>
            <div class="value"><span class="highlight">${data.service}</span></div>
          </div>
          
          <div class="field">
            <div class="label">💰 Budget Range:</div>
            <div class="value"><span class="highlight">${data.budget}</span></div>
          </div>
          
          <div class="field">
            <div class="label">📝 Project Description:</div>
            <div class="value">${data.description}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>📅 Received: ${new Date().toLocaleString()}</p>
          <p>From: COADAL Contact Form</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate plain text email
const generateEmailText = (data: ContactFormData): string => {
    return `
New Contact Form Submission - COADAL

👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
${data.phone ? `📱 Phone: ${data.phone}` : ''}
${data.company ? `🏢 Company: ${data.company}` : ''}
🛠️ Service: ${data.service}
💰 Budget: ${data.budget}

📝 Project Description:
${data.description}

📅 Submitted: ${new Date().toLocaleString()}
From: COADAL Contact Form
  `
}

// Main function to send email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
    try {
        const transporter = createTransporter()

        // Email options
        const mailOptions = {
            from: `"COADAL Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Your email address
            subject: `🚀 New Contact: ${formData.service} - ${formData.firstName} ${formData.lastName}`,
            text: generateEmailText(formData),
            html: generateEmailHTML(formData),
            replyTo: formData.email, // Allow you to reply directly to the user
        }

        // Send email
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent successfully:', info.messageId)
        return true

    } catch (error) {
        console.error('Error sending email:', error)
        return false
    }
}

// Auto-reply email to user (optional)
export const sendAutoReplyEmail = async (formData: ContactFormData): Promise<boolean> => {
    try {
        const transporter = createTransporter()

        const autoReplyHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Your Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #d946ef, #9333ea); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .footer { background: #1f2937; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; }
          .cta { background: #d946ef; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${formData.firstName}!</h1>
            <p>We've received your inquiry about ${formData.service}</p>
          </div>
          
          <div class="content">
            <p>Hello ${formData.firstName},</p>
            
            <p>Thank you for your interest in our ${formData.service} services. We're excited to learn about your project!</p>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>📋 We'll review your project requirements</li>
              <li>📞 Our team will contact you within 24 hours</li>
              <li>💡 We'll discuss your ideas and provide a custom solution</li>
              <li>📝 You'll receive a detailed proposal and timeline</li>
            </ul>
            
            <p>In the meantime, feel free to check out our portfolio or reach out if you have any questions.</p>
            
            <a href="mailto:hello@coadal.com" class="cta">Contact Us Directly</a>
          </div>
          
          <div class="footer">
            <p><strong>COADAL</strong> - Bringing Your Ideas to Life</p>
            <p>hello@coadal.com | +1 (555) 123-4567</p>
          </div>
        </div>
      </body>
      </html>
    `

        const mailOptions = {
            from: `"COADAL Team" <${process.env.EMAIL_USER}>`,
            to: formData.email,
            subject: `Thank you for your inquiry, ${formData.firstName}! 🚀`,
            html: autoReplyHTML,
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('Auto-reply sent successfully:', info.messageId)
        return true

    } catch (error) {
        console.error('Error sending auto-reply:', error)
        return false
    }
}
