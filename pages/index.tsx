import Center from '@/components/Center'
import Sidebar from '@/components/Sidebar'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify 2.0</title>
        <meta name='description' content='Spotify by Andy' />
      </Head>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}

export default Home