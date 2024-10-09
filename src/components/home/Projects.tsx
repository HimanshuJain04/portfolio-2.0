import { ProjectCard } from './ProjectCard'

const data = [
  {
    imageUrl: '',
    title: '',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    githubLink: '',
    liveLink: ''
  },
  {
    imageUrl: '',
    title: '',
    description: '',
    githubLink: '',
    liveLink: ''
  }
]

export function Projects () {
  return (
    <div className='w-full flex z-10  flex-col  gap-24 justify-center items-center p-10'>
      {/* heading */}
      <div>
        <h2 className='text-xs sm:text-base md:text-xl lg:text:3xl xl:text-6xl font-bold text-blue-500'>
          Projects
        </h2>
      </div>

      {/* projects */}
      <div className='grid grid-cols-2 gap-20'>
        {data.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  )
}
