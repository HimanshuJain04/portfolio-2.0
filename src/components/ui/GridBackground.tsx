import React from 'react'

export function GridBackground () {
  return (
    <div className='h-[40rem] w-[50rem] dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.05] relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 overflow-hidden flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  )
}
