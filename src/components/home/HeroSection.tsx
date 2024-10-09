import React from 'react'
import { GridBackground } from '../ui/GridBackground'
import { FlipWords } from '../ui/FlipWords'
import { Cover } from '../ui/cover'

const words = ['websites', 'apps']

export function HeroSection () {
  return (
    <div className='relative'>
      {/* grid */}
      <div className='w-full flex absolute justify-end'>
        <GridBackground />
      </div>

      {/* heading */}
      <div className='min-h-[70vh] gap-10 justify-center items-center flex flex-col'>
        <h1 className='text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6'>
          Hi👋🏻, I'm Himanshu Jain
        </h1>

        <h1 className='text-4xl md:text-4xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white'>
          Build amazing <FlipWords words={words} />
          <br /> at <Cover>warp speed</Cover>
        </h1>
      </div>
    </div>
  )
}
