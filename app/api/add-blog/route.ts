import { NextRequest, NextResponse } from 'next/server'
import db from '@/db/config'
import { blogTable } from '@/db/schema'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const {
            title,
            meta_title,
            meta_description,
            author,
            category,
            meta_tags,
            image,
            custom_url,
            thumbnail,
            content
        } = body

        // Validate required fields
        if (!title || !custom_url || !meta_description || !author || !category || !thumbnail) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Generate slug from title or use custom URL
        const slug = custom_url || title.toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .trim()

        // Insert the blog post
        const result = await db.insert(blogTable).values({
            title,
            // url_title: slug,
            custom_url: custom_url || null,
            short_description: meta_description,
            tags: meta_tags || [],
            author,
            category: [category], // Store as array as per schema
            content: content || [],
            thumbnail
        }).returning()

        console.log('Blog post created successfully:', result[0])

        return NextResponse.json({
            success: true,
            blog: result[0],
            slug: slug
        })

    } catch (error) {
        console.error('Error creating blog post:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
