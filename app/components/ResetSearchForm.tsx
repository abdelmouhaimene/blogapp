"use client"
import React from 'react'
import Link from 'next/link'

const ResetSearchForm = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset()
    }
    return (
        <button type='reset' onClick={reset} className=''>
            <Link href='/' className='search-btn text-white'>
                X
            </Link>
        </button>
    )
}

export default ResetSearchForm