'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate =(routeName)=>{
    router.push(routeName);
  }

  return (
    <>
      <div> 
        <br/>
       <Link href="/About"> Go to About page</Link>
       <br/>
       <br/>
       <Link href="/Login"> Go to Login page</Link>
       <br/>
       <br/>
       <button onClick={()=>{navigate('/About')}}>About</button>
       <br/>
       <br/>
       <button onClick={()=>{navigate('/Login')}}>Login</button>
      </div>
    </>
  );
}
