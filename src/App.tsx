import HeaderBar from './components/HeaderBar'
import AboutCard from './components/AboutCard'

import { projects } from './data/index'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <>
    <HeaderBar />
    
    <div className='md:h-[90vh]'>
      <AboutCard />
    </div>

    <div className='text-center flex justify-center py-5 bg-black mt-20 md:mt-0'>
      <h2 className='text-4xl font-bold text-white'>Projects</h2>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10 text-center mx-auto max-w-[90%] lg:max-w-[80%]'>
      {projects.map( project =>  (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    </>
  )
}

export default App
