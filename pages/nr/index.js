import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { HiOutlineDocument } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';

export default function index() {
    const displayContents = ["developer","designer","photographer"]
    const [occupation, setOccupation] = useState("developer")
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  
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
    <main className='h-screen w-screen'>
        <div className='flex h-screen'>
            {/* sidebar */}
        <div className="w-1/5 bg-gray-900 fixed  h-screen text-white p-10" >
            <div className=''>
                <img src="/nr6.jpeg" alt="" className='h-36 rounded-full w-36 mx-auto border border-slate-800' />
                <h1 className='text-xl py-4 text-center font-bold'>Nithish Reddy</h1>
            </div>
            <div className='flex justify-around'>
                <Link  href={""}  className=''><AiOutlineInstagram className='h-7 w-7'/></Link>
                <Link href={""} ><AiFillTwitterCircle className='h-7 w-7'/></Link>
                <Link href={""} ><img src="https://www.linkedin.com/favicon.ico" alt="" srcset=""  className='h-7 w-7 grayscale hover:grayscale-0  ' /></Link>
                <Link href={""} ><img src="https://www.facebook.com/favicon.ico" alt="" srcset="" className='h-7 w-7 grayscale hover:grayscale-0  '  /></Link>
                <Link href={""} ><img src="https://www.leetcode.com/favicon.ico" alt="" srcset="" className='h-7 w-7 grayscale hover:grayscale-0  '  /></Link>
            </div>
            <div className='flex flex-col mt-10 text-xl'>
                
                <div className='flex my-4'><GoHome /> <a href="#home" className='mx-3'>Home</a></div>
                <div className='flex my-4'><GoPerson /> <a href="#about" className='mx-3'>About</a></div>
                <div className='flex my-4'><HiOutlineDocument /> <a href="#resume" className='mx-3 '>Resume</a></div>
                <div className='flex my-4'><CgWebsite /> <a href="" className='mx-3'>Portfolio</a></div>
                <div className='flex my-4'><MdOutlineDesignServices /> <a href="" className='mx-3'>Services</a></div>
                <div className='flex my-4'><AiOutlineMail /> <a href="" className='mx-3'>Contact</a></div> 
            </div>

        </div>

        {/* home */}
        <div className='w-4/5 ml-auto' id="home">
            <div className='h-screen '>
                <img src="/nitish.png" alt="" className='h-screen w-[80%] absolute z-10 ' />
                <div className='absolute z-30 bg-gray-800 h-screen w-[80%] opacity-60' >
                       
                </div>
                <div className='absolute z-30 h-screen w-[80%] opacity-100'>
                    <div>
                    <h1 className='ml-[430px] mt-[300px] text-5xl text-white font-bold' >NITHISH REDDY  </h1>
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
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className='flex mt-10 p-5'>
                    <div className='w-[40%]'>
                    <img src="/nr5.jpeg" alt="no" className='w-[80%] h-[500px] rounded-sm' />
                    

                    </div>
                    <div className='w-[65%]'>
                        <h1 className='font-bold text-2xl text-blue-900'>UI/UX Designer & Web Developer.</h1>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                       <div className='flex mt-10'>
                        <div className='w-[50%]'>
                                                    
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                                
                                <tbody>
                                    <tr className="bg-white border-b w-[80%] dark:bg-gray-800 dark:border-gray-700">
                                    
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        
                                    </tr>
                                    <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        
                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4">
                                            $99
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
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                       </div>
                        <p className='mt-2'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    </div>
                </div>
            </div>


            {/* skills */}

            <div className='p-10 bg-sky-50'>
                <div className=''>
                    <h1 className='text-2xl font-bold '>Skills</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <p className='mt-5'>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div> 
                <div className='my-5'>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
            
                <td className="px-6 py-1 text-xl">
                    React
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    Next js
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-1 text-xl">
                    Python
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    Java
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700  my-2">
                                    <div className="w-[10%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700">
                
                <td className="px-6 py-1 text-xl">
                    Machine Learning
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[50%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    Internet Of Things
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[50%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
            </tr>
            <tr className=" dark:bg-gray-800">
                
                <td className="px-6 py-1 text-xl">
                    3D Designing
                    <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[15%] absolute right-0 bg-white h-2"></div>
                    </div>
                </td>
                <td className="px-6 py-1 text-xl">
                    3D Printing
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
            <div className=" p-10 bg-gray-50 h-screen w-screem"  id="resume">
                <div className=''>
                    <h1 className='text-2xl font-bold '>Resume</h1>
                    <div className='mt-1 h-1 bg-blue-700 w-9' />
                    <p className='mt-5'>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className='flex mt-10'>
                    <div className='w-[50%]'>
                        <h1 className='text-2xl my-2'>Summary</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                            Nithish Reddy
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est id quis explicabo quia. Dolor quibusdam voluptatum beatae amet neque!
                          </p>
                            <ul>
                                <li>one</li>
                                <li>two</li>
                                <li>three</li>
                            </ul>
                        </div>
                      </div>
                        <h1 className='text-2xl my-2'>Education</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                            Nithish Reddy
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est id quis explicabo quia. Dolor quibusdam voluptatum beatae amet neque!
                          </p>
                            <ul>
                                <li>one</li>
                                <li>two</li>
                                <li>three</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-2xl my-2'>Internship</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                            Nithish Reddy
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est id quis explicabo quia. Dolor quibusdam voluptatum beatae amet neque!
                          </p>
                            <ul>
                                <li>one</li>
                                <li>two</li>
                                <li>three</li>
                            </ul>
                        </div>
                      </div>
                        <h1 className='text-2xl my-2'>Summary</h1>
                        <div className="flex">
                        <div className="pt-1">
                          <div className="w-3 bg-sky-800 h-3 rounded-full opacity-60"></div>
                          <div className="w-1 bg-sky-800 h-32 m-1"></div>
                        </div>
                        <div className="ml-5 mt-1">
                          <p className="font-semibold text-2xl ">
                            Nithish Reddy
                          </p>
                          <p className="tracking-[2px] my-1 text-[12px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est id quis explicabo quia. Dolor quibusdam voluptatum beatae amet neque!
                          </p>
                            <ul>
                                <li>one</li>
                                <li>two</li>
                                <li>three</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </main>
  )
}
