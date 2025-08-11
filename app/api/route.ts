import { NextRequest, NextResponse } from 'next/server'
import db from '../../db/config'
import { blogTable } from '../../db/schema'

export async function GET(request: NextRequest,) {
    try {
        console.log('Fetching blog with slug:')
        const db_result = await db.select().from(blogTable)
        console.log('Fetching blog with slug lsn :')
        return NextResponse.json(db_result)

    } catch (error) {
        console.error('Error in GET /api/blogs/[slug]:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
