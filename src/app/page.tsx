import { GridBackground } from '@/components/ui/GridBackground'

export default function Home () {
  return (
    <div className='h-[200vh] bg-white dark:bg-black flex py-20 flex-col gap-20 w-full'>
      <div className='w-full flex justify-end'>
        <GridBackground />
      </div>
    </div>
  )
}
