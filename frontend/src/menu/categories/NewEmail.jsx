import React from 'react'

export default function NewEmail() {
  return (
    <div className='flex flex-col'>
          <form action="">
            <label htmlFor="" className='block mb-2' >from
              <input type="text" className='m-2' />
            </label>
            <label htmlFor="" className='block mb-2'>to
              <input type="text" className='m-2' />
            </label>
            <label htmlFor="" className='block mb-2 '>subject
              <input type="text" className='m-2'/>
            </label>
            <label htmlFor="" className='block mb-2'>body the email
              <input type="text" className='m-2'/>
            </label>
          </form>
    </div>
  )
}
