import React from 'react'
import Container from '~/components/container'
import NavBar from '~/components/NavBar'


const page = () => {
  return (
    <>
    <NavBar/>
    <div className='flex flex-col gap-10 items-center justify-center text-white h-auto lg:h-[100vh] bg-black'>
        <h1 className='lg:text-7xl text-5xl text-white font-bold'>CogniCraft</h1>
        <div id='container' className='lg:w-[800px] gap-10 flex flex-col lg:flex-row items-center justify-center'>
            <Container/>
            <Container/>
            <Container/>
        </div>
    </div>
    </>
  )
}

export default page