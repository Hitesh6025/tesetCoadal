import { NextRequest, NextResponse } from 'next/server'
import db from '@/db/config'
import { blogTable } from '@/db/schema'
import { eq, or } from 'drizzle-orm'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
        }

        // Search for blog by custom_url first, then by url_title
        const blogs = await db.select()
            .from(blogTable)
            .where(or(eq(blogTable.custom_url, slug)))

        if (blogs.length === 0) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
        }

        const blog = blogs[0]
        console.log('Fetched blog by slug:', slug)

        return NextResponse.json(blog)

    } catch (error) {
        console.error('Error fetching blog by slug:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
