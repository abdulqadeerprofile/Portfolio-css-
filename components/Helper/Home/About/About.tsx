import React from 'react'
import SectionHeading from '../../sectionHeading'
import { aboutInfo } from '@/Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='pt-16 pb-16 bg-[#050709]'>\
    <SectionHeading>About Me</SectionHeading>
    <div data-aos="fade-left" data-aos-anchor-placement="top-center" className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 '>
        {/* TEXT CONTENT */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
            <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
            <div className='mt-8 '>
                <div className='flex items-center space-x-2 mb-6 '>
                    <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white'/>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300 '>Android Development</p>
                </div>
                <div className='flex items-center space-x-2 mb-6 '>
                    <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white'/>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300 '>API Integrations</p>
                </div>
                <div className='flex items-center space-x-2 mb-6 '>
                    <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                        <FaCheck className='text-white'/>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300 '>React native with Typescript</p>
                </div>
            </div>
        </div>
        {/* STATS CONTENT */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150" className='grid grid-cols-2 gap-16 items-center lg:mx-auto '>
            {/* 1ST STAT */}
            <div>
                <Image src='/images/customer.png' alt='image' width={80} height={80} className='mx-auto'/>
                <p className='mt-3 font-bold text-xl text-white text-center '>{aboutInfo.client}</p>
                <p className='text-base sm:text-lg text-gray-400 text-center'>Satisfied Clients</p>
            </div>
            {/* 2ND STAT */}
            <div>
                <Image src='/images/experience.png' alt='image' width={80} height={80} className='mx-auto'/>
                <p className='mt-3 font-bold text-xl text-white text-center '>{aboutInfo.experience}</p>
                <p className='text-base sm:text-lg text-gray-400 text-center'>Years Experience</p>
            </div>
            {/* 3RD STAT */}
            <div>
                <Image src='/images/completed.png' alt='image' width={80} height={80} className='mx-auto'/>
                <p className='mt-3 font-bold text-xl text-white text-center '>{aboutInfo.personalProject}</p>
                <p className='text-base sm:text-lg text-gray-400 text-center'>Personal Projects</p>
            </div>
            {/* 4TH STAT */}
            <div>
                <Image src='/images/mobile.png' alt='image' width={80} height={80} className='mx-auto'/>
                <p className='mt-3 font-bold text-xl text-white text-center '>{aboutInfo.megaApplications}</p>
                <p className='text-base sm:text-lg text-gray-400 text-center'>Mega Applications</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About