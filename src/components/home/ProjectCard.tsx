'use client'
import React from 'react'
import { BackgroundGradient } from '../ui/background-gradient'
import Image from 'next/image'

type ProjectCardType = {
  imageUrl: string
  title: string
  description: string
  githubLink: string
  liveLink?: string
}

export function ProjectCard({ data }: { data: ProjectCardType }) {
  const { imageUrl, title, description } = data
  return (
    <div>
      <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
        <Image
          src={imageUrl}
          alt='image'
          height='400'
          width='400'
          className='object-contain'
        />
        <p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
          {title}
        </p>

        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          {description}
        </p>
      </BackgroundGradient>
    </div>
  )
}
