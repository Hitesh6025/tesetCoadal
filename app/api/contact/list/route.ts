import { NextRequest, NextResponse } from 'next/server'
import db from '../../../../db/config'
import { contactSubmissionsTable } from '../../../../db/schema'

export async function GET() {
    try {
        // Get recent contact submissions (limit to 10 for testing)
        const submissions = await db
            .select()
            .from(contactSubmissionsTable)
            .orderBy(contactSubmissionsTable.submittedAt)
            .limit(10)

        return NextResponse.json({
            message: 'Contact submissions retrieved successfully',
            count: submissions.length,
            submissions: submissions
        })

    } catch (error) {
        console.error('Error fetching contact submissions:', error)
        return NextResponse.json(
            { error: 'Failed to fetch contact submissions' },
            { status: 500 }
        )
    }
}
