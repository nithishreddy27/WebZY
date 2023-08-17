import React from 'react'

export default function Box() {
  return (
    <section id="about" className="p-28">
        <div className='bg-slate-100 w-[100%] border-2 shadow-2xl p-16' >
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className='flex'>
                            <div className='mx-7'>
                                <img src="/nr6.jpeg" alt="" className='h-[250px] w-[250px]'/>
                            </div>
                            <div className='text-center my-10 '>
                                <table>
                                    <tbody>
                                        <tr >
                                            <td className='py-2 text-2xl'>Name:</td>
                                            <td className='py-2'>Nithish Reddy</td>
                                        </tr>
                                        <tr>
                                            <td className='py-2 text-2xl'>DOB:</td>
                                            <td className='py-2'>27 JUNE 2002</td>
                                        </tr>
                                        <tr>
                                            <td className='py-2 text-2xl'>Phone:</td>
                                            <td className='py-2'>8520937627</td>
                                        </tr>
                                        <tr>
                                            <td className='py-2 text-2xl'>Email:</td>
                                            <td className='py-2'>nithishreddygade@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className='m-10'>
                            <h1 className='text-3xl font-semibold my-2 tracking-widest'>Skills</h1>

                            <h1>HTML</h1>
                            <div className="w-[100%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[60%] absolute right-0 bg-white h-2"></div>
                            </div>
                            <h1>HTML</h1>
                            <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[60%] absolute right-0 bg-white h-2"></div>
                            </div>
                            <h1>HTML</h1>
                            <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                            </div>
                            <h1>HTML</h1>
                            <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                            </div>
                            <h1>HTML</h1>
                            <div className="w-[40%] h-2  relative rounded-md left-0 bg-sky-700   my-2">
                                    <div className="w-[0%] absolute right-0 bg-white h-2"></div>
                            </div>
                        </div>
                    </div>
                    <div>

                            <h1 className='text-3xl font-semibold tracking-widest mb-10'>About</h1>
                            <div className='flex flex-col justify-between text-2xl font-light '>

                            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos quidem culpa alias molestiae? Atque rerum cupiditate pariatur ratione, sed magnam assumenda dolorem similique vero eum corrupti odit magni illo.</p>
                            <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat labore facere repudiandae nemo? Distinctio nisi a, iure eaque voluptatem qui vitae sed iste voluptate fuga quod fugiat facere praesentium similique?</p>
                            <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus consectetur ex odit doloribus! Sit velit magnam dolores expedita voluptates consectetur quidem libero, omnis vitae magni corrupti. Unde, quaerat deleniti.</p>
                            </div>

                    </div>
                </div>
        </div>
    </section>
    
  )
}
