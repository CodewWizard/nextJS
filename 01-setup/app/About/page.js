'use client'
import Link from 'next/link';

// we can use next/router in client component only
import { useRouter } from "next/router";  
import React from 'react'

const page = () => {
  return (
    <>
        <div>About</div>
        <br/>
        <Link href='/About/AboutStudent'>Go to About Student page</Link>
        <br/>
        <br/>
        <Link href='/'>Go to Home page</Link>
    </>
  )
}

export default page;