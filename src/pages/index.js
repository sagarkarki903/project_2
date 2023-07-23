import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>project_2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div>
    
    
    <div className='bg-red-200 headerr font-bold text-white mx-3'>
      PORTFOLIO
   
      <div className="text-xl bg-red-500 mx-4 md:mx-10 lg:mx-0 max-w-3xl px-5 py-2">          
        <p>n this example, I've added a negative mx value for each breakpoint to move the 
          element to the left. Adjust the negative values as needed to control the extent of the movement. 
           Smaller negative values will move the element less, while larger negative 
           values will move it further to the left. 
           mind that using very large negative values can cause the element to move
            out of the viewport, so you may want to use reasonable negative values 
            based on your layout requirements.</p>
       
      </div>

    </div>

  </div>
     
    </>
  )
}
