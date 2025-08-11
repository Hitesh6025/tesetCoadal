import { NextRequest, NextResponse } from 'next/server'
import db from '@/db/config'
import { blogTable } from '@/db/schema'
import { desc } from 'drizzle-orm'

export async function GET(request: NextRequest) {
    try {
        // For now, get all blogs and filter in JavaScript
        // TODO: Implement proper SQL filtering once drizzle types are fixed
        const blogs = await db.select().from(blogTable).orderBy(desc(blogTable.created_at))

        const { searchParams } = new URL(request.url)
        const category = searchParams.get('category')
        const search = searchParams.get('search')

        let filteredBlogs = blogs

        // Filter by category
        if (category && category !== 'All') {
            filteredBlogs = filteredBlogs.filter(blog =>
                blog.category && blog.category.includes(category)
            )
        }

        // Filter by search term
        if (search) {
            const searchLower = search.toLowerCase()
            filteredBlogs = filteredBlogs.filter(blog =>
                blog.title.toLowerCase().includes(searchLower) ||
                blog.short_description?.toLowerCase().includes(searchLower)
            )
        }

        console.log('Fetched blogs:', filteredBlogs.length)
        return NextResponse.json(filteredBlogs)

    } catch (error) {
        console.error('Error fetching blogs:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
