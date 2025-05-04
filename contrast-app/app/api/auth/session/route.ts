import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { auth } from '@/lib/firebase'

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    // Verify the Firebase ID token
    const decodedToken = await auth.verifyIdToken(token)

    // Create a session cookie that expires in 5 days
    const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days

    // Set the session cookie
    cookies().set('session', token, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    })

    return NextResponse.json({ status: 'success' })
  } catch (error) {
    console.error('Error setting session:', error)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
} 