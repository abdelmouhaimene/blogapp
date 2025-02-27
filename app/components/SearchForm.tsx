import React from 'react'
import Form from 'next/form'
import ResetSearchForm from './ResetSearchForm'

const SearchForm = ({query} : {query?:string}) => {
  return (
    <Form action='/' className='search-form'>
        <input 
            name="query" 
            defaultValue={query}
            className='search-input'    
            placeholder='Search Startup'
        />
        <div className='flex gap-2'>
            {query && <ResetSearchForm />}
            <button type='submit' className='search-btn'>S</button>
        </div>
    </Form>
  )
}

export default SearchForm