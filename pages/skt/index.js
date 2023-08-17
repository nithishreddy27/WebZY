import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState ,useRef } from 'react'
import { FaBeer } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { HiOutlineDocument } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import {motion,AnimatePresence, delay,useAnimation , useInView} from "framer-motion"

export default function index() {
    const displayContents = ["developer","designer"]
    const [occupation, setOccupation] = useState("developer")
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const ref = useRef(null)
    const isInView = useInView(ref , { once:true})
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect(()=>{
        console.log("true",isInView)
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          if (prevIndex < displayContents[currentWordIndex].length - 1) {
            return prevIndex + 1;
          } else {
            setCurrentWordIndex((prevWordIndex) => {
              if (prevWordIndex < displayContents.length - 1) {
                return prevWordIndex + 1;
              } else {
                return 0;
              }
            });
            return 0;
          }
        });
      }, 200); // Adjust the interval duration as per your preference
  
      return () => {
        clearInterval(interval);
      };
    }, [currentWordIndex]);
  
    useEffect(() => {
      setOccupation(displayContents[currentWordIndex]);
    }, [currentWordIndex]);
  

  return ( 
    <main className='h-screen w-screen' ref={ref} >
        <div className='flex h-screen' >
            {/* sidebar */}
        <div className="w-1/5 bg-gray-900 fixed  h-screen overflow-auto text-white p-10 " >
            <div className=''>
                <img src="/skt8.jpeg" alt="" className='h-36 rounded-full w-36 mx-auto border border-slate-800' />
                <motion.h1 className='text-xl py-4 text-center font-bold' 
                variants={{
                    hidden:{opacity:0 ,y:75},
                    visible:{opacity:1,y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition= {{ duration:0.5 , delay:0.25}}
                >Sai Krishna Teja</motion.h1>
            </div>
            <div className='flex justify-around pt-2'>
                <Link  href={"https://www.instagram.com/sai_krishna__12/?next=https%3A%2F%2Faccountscenter.instagram.com%2F%3F__coig_login%3D1"}  className=''><img src="https://www.instagram.com/favicon.ico" alt="" srcset=""  className='h-7 w-7 grayscale hover:grayscale-0  ' /></Link>
                {/* <Link href={""} ><img src="https://www.linkedin.com/favicon.ico" alt="" srcset=""  className='h-7 w-7 grayscale hover:grayscale-0  ' /></Link> */}
                <Link href={"https://www.linkedin.com/in/sai-krishna-todupunuri-9bb09b210/"} ><img src="https://www.linkedin.com/favicon.ico" alt="" srcset=""  className='h-7 w-7 grayscale hover:grayscale-0  ' /></Link>
                <Link href={"https://github.com/saikrishna1209"} ><img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="" srcset="" className='h-7 w-7 grayscale hover:grayscale-0  '  /></Link>
                {/* <Link href={""} ><img src="https://www.leetcode.com/favicon.ico" alt="" srcset="" className='h-7 w-7 grayscale hover:grayscale-0  '  /></Link> */}
            </div>
            <div className='flex flex-col mt-10 text-xl'>
                
                <div className='flex my-4'>
                  <GoHome size={24} /> <a href="#home" className='mx-3'>Home</a>
                  </div>
                <div className='flex my-4'><GoPerson size={24}/> <a href="#about" className='mx-3'>About</a></div>
                <div className='flex my-4'><HiOutlineDocument size={24} /> <a href="#resume" className='mx-3 '>Resume</a></div>
                {/* <div className='flex my-4'><CgWebsite /> <a href="" className='mx-3'>Portfolio</a></div> */}
                <div className='flex my-4'><MdOutlineDesignServices size={24} /> <a href="#services" className='mx-3'>Non-academics</a></div>
                <div className='flex my-4'><AiOutlineMail  size={24}/> <a href="#contact" className='mx-3'>Contact</a></div> 
            </div>

        </div>

        {/* home */}
        <div className='w-4/5 ml-auto' id="home">
            <div className='h-screen '>
                <img src="/skt5.jpeg" alt="" className='h-screen w-[80%] absolute z-10 ' />
                <div className='absolute z-30 bg-gray-800 h-screen w-[80%] opacity-60' >
                       
                </div>
                <div className='absolute z-30 h-screen w-[80%] opacity-100'>
                    <div className='mx-auto'>
                    <motion.h1 className='ml-[430px] mt-[400px] text-5xl text-white font-bold'  initial={{y:-25,opacity:0}}
                     animate={{y:0,opacity:1}}
                     transition={{
                     duration:1,
                     delay:0.2
                     }}>SAI KRISHNA TEJA</motion.h1>
                    <h1 className='ml-[430px] mt-[10px] text-3xl text-white ' >I am a {occupation.substring(0, currentLetterIndex + 1)+" |"}  </h1>
                    </div>
                    {/* <h1 className='ml-[430px] mt-[400px] text-5xl text-white font-bold' >NITHISH REDDY</h1> */}
                </div>
            </div>

            {/* about */}

            <div className=" p-10 bg-gray-50"  id="about">
                <div className=''>
                    <h1 className='text-2xl font-bold '>About</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <p className='mt-5'>
                    Motivated and organized professional seeking a challenging career opportunity to
leverage my training and skills for the benefit of a company's success. Committed to
making a significant contribution by applying my practical experience and dedication to
excellence. Eager to contribute to a dynamic team, bring a strong work ethic, and actively
pursue opportunities for professional growth..</p>
                </div>

                <div className='flex mt-10 p-5'>
                    <div className='w-[40%]'>
                    <img src="/skt.jpg" alt="no" className='w-[80%] h-[450px] rounded-sm' />
                    

                    </div>
                    <div className='w-[65%]'>
                        <motion.h1 className='font-bold text-2xl text-blue-900' variants={{
                    hidden:{opacity:0 ,y:75},
                    visible:{opacity:1,y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition= {{ duration:0.5 , delay:0.25}}>    Frontend Developer &     Full Stack Developer</motion.h1>
                        <p className='mt-2'>Crafting Seamless User Experiences, One Line of Code at a Time – Frontend & Full Stack Wizard.</p>

                       <div className='flex mt-10'>
                        <div className='w-[50%]'>
                                                    
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                                
                                <tbody>
                                    <tr className="bg-white border-b w-[80%] dark:bg-gray-800 dark:border-gray-700">
                                    
                                        <td className="px-6 py-4">
                                            Name 
                                        </td>
                                        <td className="px-6 py-4">
                                            Sai krishna Teja
                                        </td>
                                        
                                    </tr>
                                    <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        
                                        <td className="px-6 py-4">
                                            Branch
                                        </td>
                                        <td className="px-6 py-4">
                                            CSIT
                                        </td>
                                    </tr>
                                    {/* <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        
                                        <td className="px-6 py-4">
                                            DOB
                                        </td>
                                        <td className="px-6 py-4">
                                        12-09-2002

                                        </td>
                                    </tr> */}
                                    <tr className="bg-white dark:bg-gray-800">
                                        
                                        <td className="px-6 py-4">
                                            COLLEGE
                                        </td>
                                        <td className="px-6 py-4">
                                            CVR COLLEGE OF ENGINEERING
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        </div>
                        <div className='w-[50%]'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                
                                    <td className="px-6 py-4">
                                        EMAIL
                                    </td>
                                    <td className="px-6 py-4">
                                    saitodupunuri1209@gmail.com

                                    </td>
                                    
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    
                                    <td className="px-6 py-4">
                                        PHONE 
                                    </td>
                                    <td className="px-6 py-4">
                                        9347842364
                                    </td>
                                </tr>
                                <tr className="bg-white pb-2 dark:bg-gray-800 dark:border-gray-700">
                                    
                                    <td className="px-6 py-4 ">
                                    DOB
                                    </td>
                                    <td className="px-6 py-4">
                                    12-09-2002
                                    </td>
                                </tr>
                                {/* <tr className="bg-white dark:bg-gray-800">
                                    
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                        </div>

                       </div>
                        <p className='mt-4'>Dedicated Frontend Developer skilled in creating engaging user interfaces and seamless user experiences through proficient use of HTML, CSS, and JavaScript, aiming to contribute creatively to web development projects.

</p>
                        <p className='mt-2'>Results-driven Full Stack Developer with expertise in both frontend and backend technologies, seeking to leverage comprehensive coding skills and system design proficiency to deliver dynamic and responsive web applications that fulfill user needs and business objectives.

</p>
                    </div>
                </div>
            </div>


            {/* skills */}

            <div className='p-10 bg-sky-50'>
                <div className=''>
                    <h1 className='text-2xl font-bold '>Skills</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <p className='mt-5'>
                    Aspiring MERN Stack Developer adept in JavaScript, NextJS, and Python, with a solid foundation in HTML, CSS (including TailwindCSS), and Java. Passionate about integrating efficient data structures and algorithms to craft high-quality, responsive web applications. Seeking opportunities to contribute to innovative projects and enhance user experiences.</p>
                </div> 
                <div className='my-5'>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
            
                <td className="px-6 py-1 text-xl">
                MERN Stack
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    NEXT JS
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-1 text-xl">
                CSS, TailwindCSS
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    PYTHON
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700  my-2">
                                    <div className="w-[50%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-1 text-xl">
                   JAVA
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[20%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                Data Structures and Algorithms
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[50%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
            <tr className=" dark:bg-gray-800">
                
                <td className="px-6 py-1 text-xl">
                Analytical and Technical Thinking
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[15%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                Quick Learner
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[15%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
            <tr className=" dark:bg-gray-800">
                
                <td className="px-6 py-1 text-xl">
                Good leader
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[15%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                Adaptability
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[15%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
                </div>
            </div>


            {/* Resume */}
            <div className=" p-10 bg-gray-50  w-screem"  id="resume">
                <div className=''>
                    <h1 className='text-2xl font-bold '>Resume</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    
                </div>
                <div className='flex mt-10'>
                    <div className='w-[50%]'>
                        <h1 className='text-2xl my-2'>ACHIEVEMENTS
</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          Project Expo 2022 (Google Developer Student Club) 
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          winners of GDSC Hackathon
                          </p>
                          <p>
                          Mar 2022
                          </p>
                            
                        </div>
                      </div>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          CYPHER 2K22 Webathon  
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Winners in Computer Society of India Webathon
                          </p>
                          <p>
                          Nov 2022
                          </p>
                            
                        </div>
                      </div>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          project Expo 2023
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Winners in college level project Expo competition.
                          </p>
                          <p>
                          Apr 2023
                          </p>
                            
                        </div>
                      </div>
                        <h1 className='text-2xl my-2'>Internship</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-40 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          Provast
                          </p>
                          <p className="tracking-[2px] my-1 font-semibold text-[12px]">
                          FullStack Web developer
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px] text-justify mr-10">
                          Provast is a comprehensive online platform designed to assist job seekers in building effective
resumes and providing test patterns for various job applications. It offers a wide range of templates
and formatting options to create professional resumes that highlight your skills and qualifications.
Additionally, Provast provides access to a database of test patterns, helping candidates prepare for
job assessments and interviews
                          </p>
                           
                        </div>
                      </div>
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-2xl my-2'>Education</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          CVR College of Engineering 
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          BTech in Computer Science and
Information Technology

                          </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                2020 - 2024
                              </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                <b>Cgpa:</b> 8.00
                              </p>
                            
                        </div>
                      </div>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          Akshara Junior College                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Intermediate in MPC

                          </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                2018 - 2020
                              </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                <b>Percentage</b> 86%
                              </p>
                            
                        </div>
                      </div>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          SPR school of excellence
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Secondary School education 

                          </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                2018
                              </p>
                              <p className="tracking-[2px] my-1 text-[12px]">
                                <b>Cgpa:</b> 8.4
                              </p>
                            
                        </div>
                      </div>
                        <h1 className='text-2xl my-2'>Courses</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          Course on data science
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                            IIT Bhubaneshwar
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Nov 2022
                          </p>
                            
                        </div>
                      </div>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                          Complete responsive web devolopment
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Udemy
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                          Apr 2023
                          </p>
                            
                        </div>
                      </div>
                    </div>
                </div>
            </div>


            {/* services  */}
            <div className='p-10 bg-sky-50 ' id="services">
                <div className=''>
                    <h1 className='text-2xl font-bold '>EXTRACURRICULAR ACTIVITIES</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <h1 className='mt-5 font-semibold text-xl'>Member of Indian Society for Technichal Education</h1>
                    <p className='mt-2'>
                    Active member of the Indian Society for Technical Education, dedicated to fostering knowledge exchange, professional growth, and collaborative learning within the technology sector, while contributing to the advancement of technical education in India.</p>
                    <h1 className='mt-5 font-semibold text-xl'>Basket Ball</h1>
                    <p className='mt-2'>
                    Active member of the college basketball team, demonstrating strong teamwork, leadership, and dedication. Contributed to the team's success by securing victories in multiple tournaments through skillful play and strategic collaboration.</p>
                  
                </div> 
                <div className='my-5'>
               
                </div>
            </div>

                                
            <div className='p-10 bg-white ' id="contact">
                <div className=''>
                    <h1 className='text-2xl font-bold '>Contact</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
        
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            
                <td className="px-6 py-4">
                    EMAIL
                </td>
                <td className="px-6 py-4">
                saitodupunuri1209@gmail.com

                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-4">
                    PHONE 
                </td>
                <td className="px-6 py-4">
                    9347842364
                </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-4">
                DOB
                </td>
                <td className="px-6 py-4">
                12-09-2002
                </td>
            </tr>
            {/* <tr className="bg-white dark:bg-gray-800">
                
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr> */}
        </tbody>
    </table>
                </div> 
              
            </div>
         </div>
        </div>
    </main>
  )
}
