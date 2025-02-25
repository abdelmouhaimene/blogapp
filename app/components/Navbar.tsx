import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {signIn,signOut, auth } from '@/auth'

const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-workSans'>
        <nav className=' flex justify-between items-center'>
            <Link href='/'>
                <Image src="/logo.svg" alt="logo" width={144} height={144}/>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {session && session?.user ? (
                  <>
                    <Link href="/startup/create"> Create </Link>
                    <button onClick={() => signOut}>
                      <span>sign Out</span>
                    </button>
                    <Link href={`/user/${session?.user?.id}`} > 
                      <span>{session?.user?.name}</span>
                    </Link>
                  </>
                  ) : (
                   <>
                    <button >
                      <span> Login </span>
                    </button>
                   </>
                  )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar