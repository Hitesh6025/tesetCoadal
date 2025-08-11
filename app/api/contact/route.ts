import { NextRequest, NextResponse } from 'next/server'
import db from '../../../db/config'
import { contactSubmissionsTable, type NewContactSubmission } from '../../../db/schema'
import { sendContactEmail, sendAutoReplyEmail } from '../../../lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const { firstName, lastName, email, service, budget, description } = formData

    if (!firstName || !lastName || !email || !service || !budget || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    try {
      // Prepare data for insertion
      const newSubmission: NewContactSubmission = {
        firstName,
        lastName,
        email,
        phone: formData.phone || null,
        company: formData.company || null,
        service,
        budget,
        description,
        submittedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }

      // Insert into database using Drizzle
      const result = await db.insert(contactSubmissionsTable).values(newSubmission).returning()

      console.log('Contact form submitted successfully to database:', result[0])

      // Send email notifications
      let emailSent = false
      let autoReplySent = false

      try {
        // Send email to you with the form details
        emailSent = await sendContactEmail({
          firstName,
          lastName,
          email,
          phone: formData.phone,
          company: formData.company,
          service,
          budget,
          description
        })

        // Send auto-reply to user
        autoReplySent = await sendAutoReplyEmail({
          firstName,
          lastName,
          email,
          phone: formData.phone,
          company: formData.company,
          service,
          budget,
          description
        })

        console.log(`Email notifications: Admin email ${emailSent ? 'sent' : 'failed'}, Auto-reply ${autoReplySent ? 'sent' : 'failed'}`)

      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Continue even if email fails - don't break the user experience
      }

      return NextResponse.json({
        message: 'Contact form submitted successfully',
        id: result[0].id,
        emailSent,
        autoReplySent
      })

    } catch (dbError: any) {
      console.error('Database error:', dbError)

      // Even if database fails, try to send email as backup
      try {
        const emailSent = await sendContactEmail({
          firstName,
          lastName,
          email,
          phone: formData.phone,
          company: formData.company,
          service,
          budget,
          description
        })

        console.log('Contact form submission (DB error - email sent as backup):', {
          firstName,
          lastName,
          email,
          phone: formData.phone,
          company: formData.company,
          service,
          budget,
          description,
          timestamp: new Date().toISOString(),
          emailSent
        })

        return NextResponse.json({
          message: 'Contact form submitted successfully (email sent as backup)',
          emailSent,
          note: 'Database error occurred but email was sent.'
        })
      } catch (emailError) {
        // Log to console as final fallback
        console.log('Contact form submission (DB & email error - logged to console):', {
          firstName,
          lastName,
          email,
          phone: formData.phone,
          company: formData.company,
          service,
          budget,
          description,
          timestamp: new Date().toISOString(),
          dbError: dbError.message,
          emailError
        })

        return NextResponse.json({
          message: 'Contact form submitted successfully (logged to console)',
          note: 'Database and email errors occurred but submission was logged.'
        })
      }
    }

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
