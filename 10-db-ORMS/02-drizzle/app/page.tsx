import AddUser from '@/components/AddUser'
import React from 'react'

const HomePage = () => {
  return (
    <div className='mx-auto container max-w-4xl mt-6 space-y-6'>
      <h1 className="text-xl font-bold text-center">Drizzle ORM with Next.js</h1>
      <AddUser />

    </div>
  )
}

export default HomePage
