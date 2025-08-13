import { NextRequest, NextResponse } from 'next/server'
import db from '@/db/config'
import { adminAuthTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { and } from 'drizzle-orm'
import { createHash } from 'crypto'

// Simple session store (in production, use Redis or database)
const sessions = new Map()

function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

function generateSessionToken(): string {
  return createHash('sha256').update(Date.now() + Math.random().toString()).digest('hex')
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Validate credentials from admin_auth table (plain password)
    const user = await db.select().from(adminAuthTable)
      .where(and(
        eq(adminAuthTable.username, username),
        eq(adminAuthTable.password, password)
      ));

    if (!user || user.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate session token
    const sessionToken = generateSessionToken()
    const sessionData = {
      username,
      createdAt: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000)
    }

    sessions.set(sessionToken, sessionData)

    // Create response with token in httpOnly cookie
    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful'
    })

    response.cookies.set('admin-session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })

    return response

  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin-session')?.value

    if (!sessionToken) {
      return NextResponse.json(
        { error: 'No session token provided' },
        { status: 401 }
      )
    }

    const sessionData = sessions.get(sessionToken)

    if (!sessionData || sessionData.expiresAt < Date.now()) {
      // Clean up expired session
      sessions.delete(sessionToken)
      return NextResponse.json(
        { error: 'Session expired' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      authenticated: true,
      user: { username: sessionData.username }
    })

  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('admin-session')?.value

    if (sessionToken) {
      sessions.delete(sessionToken)
    }

    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    })

    response.cookies.delete('admin-session')
    return response

  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
