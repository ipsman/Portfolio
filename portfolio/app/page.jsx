import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main className=' h-screen font-raleway font-thin bg-gradient-to-b from-[#17074F] to-[#0B031F] bg-[#0B031F]'>
      
      <section className='max-h-screen w-screen'>
        <nav className='flex justify-between mb-2 py-1'>
          <h1 className='text-3xl m-2'>Matedevs</h1>
          <ul className='flex items-center gap-3'>
            <li>
              <span className='font-raleway font-thin text-3xl cursor-pointer'>&#9776;</span>
            </li>
          </ul>
        </nav>

        <div id='overlay' className='w-0 h-screen fixed z-10 overflow-x-hidden bg-[#0000004d] backdrop-blur-xl shadow-sm content-center items-center'></div>
          <div className='container mx-auto h-80 w-screen '>
            <h1 className='text-4xl text-center mb-6'>This is my portfolio</h1>
          </div>

          <div className='p-4 flex-auto backdrop-blur-md rounded-lg bg-[#9a9a9a22] container'>
            <p className='text-lg text-justify'>
              My name is Máté, I'm an 19 year old computer enthusiast. 
              I'm currently studying Computer Science in Budapest, Hungary, 
              and working on indie games in my free time.
            </p>
        </div>
        <button className='overflow-hidden w-auto h-20 p-4 text-5xl rounded-lg text-center bg-[#9a9a9a0d]'>Connect
          <div className=' w-40 h-40 rounded-full bg-[#F2CCF3] blur-md animate-blob'></div>
          <div className=' w-40 h-40 rounded-full bg-[#CB43E0] blur-md animate-blob animation-delay-2000'></div>
        </button>
      </section>
    
      
    </main>
  )
}