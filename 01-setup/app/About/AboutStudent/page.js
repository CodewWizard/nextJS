import React from 'react'
import Link from 'next/link';


const page = () => {
  return (
    <>
        <div>About student</div>
        <br/>
        <Link href='/About'>Go to About page</Link>
        <br/>
        <br/>
        <Link href='/'>Go to Home page</Link>
    </>
  )
}

export default page;