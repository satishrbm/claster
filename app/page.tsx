'use client' // Ensure the code runs client-side

import { useEffect } from 'react'
import { useRouter } from 'next/navigation' // For App Router
import './globals.css'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])

  return <div>Redirecting...</div> // Placeholder content
}

export default Home
