import React from 'react'
import { demoResume } from '@/lib/data'
import LeftNav from '@/components/Navbar/LeftNav'
import Typing from '@/components/Intro/Typing'
import Box from '@/components/About/Box'
import Grid from '@/components/Services/Grid'

export default function index() {
    const data = demoResume()
//   console.log("demoresume",data.personal)
    return (
        <>
        
    <main className='h-screen w-screen box'>
        {/* Navbar  */}

        <LeftNav/>
        
        {/* intro   */}
       
        <section className='h-screen w-screen bg-black opacity-80 '>
                <Typing/>
        </section>

        <div className='w-screen  bg-white '>

        {/* About  */}
        <Box/>


        {/* Services  */}
        
        <Grid/>

        </div>


    </main>
        
    <style jsx>{`
        .box {
        background-image:url(/nitish.png) ;
        background-repeat: no-repeat;
        background-size: cover;
        overflow-x: hidden;

        `}</style>
        
    </>
  )
}
