import React from 'react'
import { foramatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const StartupCard = ({post} : {post : StartupTypeCard}) => {
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {foramatDate(post._createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='text-16-medium'>{post.views} </span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${post.author?.id}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {post.author?.name}
                    </p>
                </Link>
                <Link href={`/startup/${post._id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>
                        {post.title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${post.author?.id}`}>
                <Image className='rounded-full' src={post?.author?.avatar || "https://placehold.co/48x48"}  height={48} width={48} alt='avatar'/>
            </Link>
        </div>
        <Link href={`/startup/${post._id}`}>
            <p className='startup-card_desc'>
                {post?.descreption}
            </p>
            <Image src={post.image} alt="placeholder" className="startup-card_img" height={300} width={300}/>
        </Link>
        <div className='flex-beteween gap-3 mt-5' >
            <Link href={`/startup/${post._id}`}>
                Details
            </Link>
        </div>
    </li>
  )
}

export default StartupCard