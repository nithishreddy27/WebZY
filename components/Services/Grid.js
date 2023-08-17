import React from 'react'
import { SiMaterialdesignicons } from 'react-icons/si';
import {motion} from "framer-motion"

export default function Grid() {
  return (
    <section className='text-center p-10'>
        <h1 className='text-3xl my-5'>Services</h1>
        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        
        <motion.div className='m-10 p-10 flex flex-wrap justify-evenly'>
            <motion.div className='w-[30%] h-[350px] rounded-lg shadow-2xl p-8 flex flex-col  align-middle' 
                     initial={{z:25,opacity:0}}
                     animate={{z:0,opacity:1}}
                     transition={{
                       duration:1,
                       delay:2.8
                     }}>
                <div className='border-8 h-fit w-fit p-5 border-blue-600 bg-blue-50 rounded-full mx-auto my-4'> <SiMaterialdesignicons  size={50} style={{ height: '50px' , hover:{color:"white"} }} /> </div>
                <h1 className='text-2xl'>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis numquam sint id harum aspernatur?</p>
            </motion.div>
            <motion.div className='w-[30%] h-[350px] rounded-lg shadow-2xl p-8 flex flex-col  align-middle' initial={{z:25,opacity:0}}
                     animate={{z:0,opacity:1}}
                     transition={{
                       duration:1,
                       delay:3
                     }}>
                <div className='border-8 h-fit w-fit p-5 border-blue-600 bg-blue-50 rounded-full mx-auto my-4'> <SiMaterialdesignicons  size={50} style={{ height: '50px' , hover:{color:"white"} }} /> </div>
                <h1 className='text-2xl'>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis numquam sint id harum aspernatur?</p>
            </motion.div>
            <motion.div className='w-[30%] h-[350px] rounded-lg shadow-2xl p-8 flex flex-col  align-middle' 
            initial={{z:25,opacity:0}}
            animate={{z:0,opacity:1}}
            transition={{
              duration:1,
              delay:3.2
            }}>
                <div className='border-8 h-fit w-fit p-5 border-blue-600 bg-blue-50 rounded-full mx-auto my-4'> <SiMaterialdesignicons  size={50} style={{ height: '50px' , hover:{color:"white"} }} /> </div>
                <h1 className='text-2xl'>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis numquam sint id harum aspernatur?</p>
            </motion.div>
            <motion.div className='w-[30%] h-[350px] rounded-lg shadow-2xl p-8 flex flex-col  align-middle'
            initial={{z:25,opacity:0}}
            animate={{z:0,opacity:1}}
            transition={{
              duration:1,
              delay:3.4
            }}>
                <div className='border-8 h-fit w-fit p-5 border-blue-600 bg-blue-50 rounded-full mx-auto my-4'> <SiMaterialdesignicons  size={50} style={{ height: '50px' , hover:{color:"white"} }} /> </div>
                <h1 className='text-2xl'>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis numquam sint id harum aspernatur?</p>
            </motion.div>
            <motion.div className='w-[30%] h-[350px] rounded-lg shadow-2xl p-8 flex flex-col  align-middle' initial={{y:-25,opacity:0}}
                     animate={{y:0,opacity:1}}
                     transition={{
                       duration:1,
                       delay:3.6
                     }}>
                <div className='border-8 h-fit w-fit p-5 border-blue-600 bg-blue-50 rounded-full mx-auto my-4'> <SiMaterialdesignicons  size={50} style={{ height: '50px' , hover:{color:"white"} }} /> </div>
                <h1 className='text-2xl'>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis numquam sint id harum aspernatur?</p>
            </motion.div>
        </motion.div>
    </section>
  )
}
